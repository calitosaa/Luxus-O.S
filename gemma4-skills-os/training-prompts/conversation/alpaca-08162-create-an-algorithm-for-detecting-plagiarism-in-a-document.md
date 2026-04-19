---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8162]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm for detecting plagiarism in a document.

## Asistente
1. Accept a document as input
2. Convert the document into a set of tokens
3. Create a hash of each token
4. Compare the hashes with a database of known plagiarized content
5. If any of the hash matches, flag the document as plagiarized 
6. If none of the hashes match, the document is considered to be non-plagiarized
