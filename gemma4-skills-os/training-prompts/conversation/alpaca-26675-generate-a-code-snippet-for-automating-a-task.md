---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26675]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a code snippet for automating a task.

Contexto/Input:
A script that automates the process of sending emails.

## Asistente
import smtplib

# Establish a secure session with gmail's outgoing SMTP server 
# using your gmail account
server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()
server.login('my_gmail_address@gmail.com', 'my_password')

# Send text message through SMS gateway of destination number
def send_sms(number, message):
    server.sendmail(
      'my_gmail_address@gmail.com',
      number,
      message
    )

def send_emails():
    # Set destination numbers
    numbers = ['1111111111']
      
    # Set content of the text message
    message = "This is an automated message sent via email."
    
    # send each SMS
    for number in numbers:
        send_sms(number, message)

# calling the main block
if __name__ == '__main__':
    send_emails()
