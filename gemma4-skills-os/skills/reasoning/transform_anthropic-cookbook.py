---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: capabilities/classification/evaluation/transform.py
license: MIT
category: skills/reasoning
imported_at: 2026-04-19
---

def get_transform(output, context):
    try:
        return output.split("<category>")[1].split("</category>")[0].strip()
    except Exception as e:
        print(f"Error in get_transform: {e}")
        return output
