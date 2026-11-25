"""고정 운영 발행기의 상수만 읽어 실제 SCRIPT/CSS 통합 fixture를 만든다.

기준일 2026-11-25 / 앱 기준 커밋 805fe1f8.
운영 Python 코드를 import하거나 실행하지 않는다.
"""
import argparse
import ast
import hashlib
import re
from pathlib import Path


def read_string(node):
    if isinstance(node, ast.Constant) and isinstance(node.value, str):
        return node.value
    if isinstance(node, ast.BinOp) and isinstance(node.op, ast.Add):
        return read_string(node.left) + read_string(node.right)
    raise ValueError("문자열 상수와 문자열 연결만 허용합니다")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--publisher", type=Path, required=True)
    parser.add_argument("--commit", required=True)
    args = parser.parse_args()
    if len(args.commit) != 40 or any(c not in "0123456789abcdef" for c in args.commit):
        parser.error("고정 운영 커밋 40자리 SHA가 필요합니다")
    source = args.publisher.read_text(encoding="utf-8")
    values = {}
    for node in ast.parse(source).body:
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id in ("SCRIPT", "CSS"):
                    values[target.id] = read_string(node.value)
    if set(values) != {"SCRIPT", "CSS"}:
        raise ValueError("SCRIPT/CSS 상수가 없습니다")
    fixtures = Path(__file__).resolve().parent.parent / "test" / "fixtures"
    shell = (fixtures / "fresh-summary-integration-shell.html").read_text(encoding="utf-8")
    app_module = fixtures.parent.parent / "briefing" / "fresh-summary.js"
    app_hash = hashlib.sha256(app_module.read_text(encoding="utf-8").encode()).hexdigest()
    for key, value in {**values, "COMMIT": args.commit,
                       "APP_SHA256": app_hash,
                       "SCRIPT_SHA256": hashlib.sha256(values["SCRIPT"].encode()).hexdigest()}.items():
        shell = shell.replace("{{" + key + "}}", value)
    (fixtures / "fresh-summary-integration.html").write_text(shell, encoding="utf-8")
    # 로컬 브라우저가 구버전 모듈을 재사용하지 않도록 단독 fixture에도 LF 정규화 해시를 붙인다.
    single = fixtures / "fresh-summary.html"
    single.write_text(re.sub(r'src="/briefing/fresh-summary\.js(?:\?fixture=[a-f0-9]{64})?"',
                             f'src="/briefing/fresh-summary.js?fixture={app_hash}"',
                             single.read_text(encoding="utf-8")), encoding="utf-8")
    print(f"운영 {args.commit}: SCRIPT 그대로 삽입, 실행/운영 수정 없음")


if __name__ == "__main__":
    main()
