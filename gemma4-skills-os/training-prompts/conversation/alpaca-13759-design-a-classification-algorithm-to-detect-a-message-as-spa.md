---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13759]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a classification algorithm to detect a message as spam or ham.

Contexto/Input:
No input

## Asistente
The algorithm should first check the content of a message for any offensive or inappropriate language, or for language related to financial, legal or health advice. If the message contains any of this, it should be classified as spam. The algorithm can also use common spam signal words such as 'offer', 'discount', and 'free' to classify a message as spam. In addition, the algorithm should check for abnormal syntax and long URLs, as these are also common features of spam messages. Finally, the algorithm should check for discrepancies between the sender address, reply-to address, and the content of the message, to determine whether it is legitimate or not.
