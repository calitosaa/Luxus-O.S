---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[12785]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a web-scraping script to extract stock information.

## Asistente
import requests 
import lxml.html as lh 
import pandas as pd

url = 'https://finance.yahoo.com/quote/AAPL/'
page = requests.get(url)
doc = lh.fromstring(page.content)

column_headers = []
for col in doc.xpath('//table[@class="W(100%) M(0) Bdcl(c)"]//tr[1]//th'):
    column_headers.append(col.text_content().strip())

table_rows = doc.xpath('//tr[@class = "BdT Bdc($seperatorColor) Ta(start) Fz(s) Whs(nw)"]')

data = []
for row in table_rows:
    data_row = []
    for col in row.xpath('//td'):
        data_row.append(col.text_content().strip())
    data.append(data_row)
df = pd.DataFrame(data, columns=column_headers)
