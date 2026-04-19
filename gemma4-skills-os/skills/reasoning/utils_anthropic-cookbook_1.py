---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: capabilities/text_to_sql/evaluation/tests/utils.py
license: MIT
category: skills/reasoning
imported_at: 2026-04-19
---

# sql_utils.py
import re
import sqlite3


def extract_sql(text):
    match = re.search(r"<sql>(.*?)</sql>", text, re.DOTALL)
    return match.group(1).strip() if match else ""


def execute_sql(sql):
    conn = sqlite3.connect("../data/data.db")
    cursor = conn.cursor()
    cursor.execute(sql)
    results = cursor.fetchall()
    conn.close()
    return results
