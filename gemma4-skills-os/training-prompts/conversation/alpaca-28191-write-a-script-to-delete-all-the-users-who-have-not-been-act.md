---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28191]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a script to delete all the users who have not been active for the past 3 months

## Asistente
The following script is designed to delete all users who have not been active within the past three months:

# Get list of all users
SELECT * FROM `users`

# Iterate through list
FOR user IN users:
    # Get list of all user's recent activity 
    SELECT * FROM `activity` WHERE `user_id` = user.id
    IF activity.timestamp > (3 months ago):
        user.delete()
