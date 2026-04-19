---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26844]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Convert the following XML data into JSON format.

Contexto/Input:
<books>
	<book>
		<title>Alice in Wonderland</title>
		<author>Lewis Carroll</author>
		<price>14.99</price>
	</book>
</books>

## Asistente
{
  "books": {
    "book": {
      "title": "Alice in Wonderland",
      "author": "Lewis Carroll",
      "price": 14.99
    }
  }
}
