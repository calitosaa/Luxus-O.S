---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42074]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm to search for a given phone number in a list of names and phone numbers.

Contexto/Input:
NamePhoneList = [("John Doe", "123-456-7890"),
("Jane Doe", "098-765-4321"),
("Steve Smith", "111-111-1111")
]

PhoneNumber = "111-111-1111"

## Asistente
"""
Search for a given phone number in a list of names and phone numbers
"""

# NamePhoneList contains a list of tuples, with each tuple containing a name and a phone number
NamePhoneList = [("John Doe", "123-456-7890"),
("Jane Doe", "098-765-4321"),
("Steve Smith", "111-111-1111")
]

# PhoneNumber is the number we are searching for
PhoneNumber = "111-111-1111"

# Initialize a variable to keep track of whether or not the number is found
isFound = False

# Loop through each tuple in NamePhoneList
for name, number in NamePhoneList:
    # If the phone number matches the number we are searching for, set isFound to True and break out of the loop
    if number == PhoneNumber:
        isFound = True
        break

# Print the result
if isFound:
    print("The phone number was found.")
else:
    print("The phone number was not found.")
