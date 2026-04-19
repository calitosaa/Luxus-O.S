---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: capabilities/text_to_sql/evaluation/tests/test_above_average_salary.py
license: MIT
category: skills/reasoning
imported_at: 2026-04-19
---

from utils import execute_sql, extract_sql


def get_assert(output, context):
    sql = extract_sql(output)

    try:
        results = execute_sql(sql)
        execution_success = True
        result_valid = len(results) > 0 and all(row[2] > 0 for row in results)
    except Exception as e:
        execution_success = False
        result_valid = False
        print(f"SQL execution error: {e}")

    return {
        "pass": execution_success and result_valid,
        "score": 1 if (execution_success and result_valid) else 0,
        "reason": f"SQL {'executed successfully with valid results' if (execution_success and result_valid) else 'failed or produced invalid results'}.",
    }
