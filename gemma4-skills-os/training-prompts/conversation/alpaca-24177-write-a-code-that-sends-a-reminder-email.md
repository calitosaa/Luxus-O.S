---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[24177]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a code that sends a reminder email

Contexto/Input:
Target Date: August 15, 2022

Subject: Greeting Message

## Asistente
"""
Send a reminder email
"""

import smtplib

def send_reminder_email(target_date, subject, message):
    # Set up email server
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('<username>', '<password>')

    # Create reminder email
    sender = '<sender@example.com>'
    receivers = ['<receiver@example.com>']
    body = f'Subject: {subject}\n\n{message}'
    server.sendmail(sender, receivers, body)

    # Schedule a reminder to be sent on the target date
    server.schedule_reminder(target_date, sender, receivers, body)

    # Close the connection to the email server
    server.quit()

if __name__ == '__main__':
    target_date = 'August 15, 2022'
    subject = 'Greeting Message'
    message = 'Happy Birthday!'
    send_reminder_email(target_date, subject, message)
