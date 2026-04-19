---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[36663]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a web crawler in Python.

## Asistente
import urllib.request
import re

def crawl_web(url):
    page = urllib.request.urlopen(url)
    html_code = page.read()
    links = re.findall(r'<a href="(.*?)">', str(html_code))
    return links

print(crawl_web("https://www.example.com"))
