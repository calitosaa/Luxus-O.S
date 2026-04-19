---
source_repo: https://github.com/PrefectHQ/fastmcp
source_file: examples/skills/sample_skills/pdf-processing/reference.md
license: Apache-2.0
category: logic/mcp-protocol
imported_at: 2026-04-19
---

# PDF Processing Reference

## Text Extraction

To extract text from a PDF:

```python
from pypdf import PdfReader

reader = PdfReader("document.pdf")
for page in reader.pages:
    text = page.extract_text()
    print(text)
```

## Form Filling

PDF forms can be filled using the form fields API:

```python
from pypdf import PdfReader, PdfWriter

reader = PdfReader("form.pdf")
writer = PdfWriter()

writer.append(reader)
writer.update_page_form_field_values(
    writer.pages[0],
    {"field_name": "field_value"}
)

with open("filled_form.pdf", "wb") as output:
    writer.write(output)
```

## Merging PDFs

```python
from pypdf import PdfWriter

writer = PdfWriter()
writer.append("doc1.pdf")
writer.append("doc2.pdf")

with open("merged.pdf", "wb") as output:
    writer.write(output)
```
