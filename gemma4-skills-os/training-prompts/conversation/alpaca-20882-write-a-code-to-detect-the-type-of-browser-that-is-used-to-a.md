---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20882]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a code to detect the type of browser that is used to access the page.

## Asistente
"""
Code to detect the type of browser that is used to access the page
"""

import requests 
import re 

def get_browser_type():
    user_agent = requests.get('http://www.useragentstring.com/').text
    reg_ex = r"(?<=User\sAgent\:\s)(.*?)(?=\))"
    m = re.search(reg_ex,user_agent)
    return m.group()
    
if __name__ == '__main__':
    print(get_browser_type())
