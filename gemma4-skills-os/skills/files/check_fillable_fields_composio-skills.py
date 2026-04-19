---
source_repo: https://github.com/ComposioHQ/awesome-claude-skills
source_file: document-skills/pdf/scripts/check_fillable_fields.py
license: Apache-2.0
category: skills/files
imported_at: 2026-04-19
---

import sys
from pypdf import PdfReader


# Script for Claude to run to determine whether a PDF has fillable form fields. See forms.md.


reader = PdfReader(sys.argv[1])
if (reader.get_fields()):
    print("This PDF has fillable form fields")
else:
    print("This PDF does not have fillable form fields; you will need to visually determine where to enter data")
