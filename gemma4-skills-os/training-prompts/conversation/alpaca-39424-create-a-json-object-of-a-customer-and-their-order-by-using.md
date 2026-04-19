---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[39424]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a JSON object of a customer and their order by using the provided data.

Contexto/Input:
Name: John Doe
Address: 123 Smith Street
Total Order Cost: $100
Products:
- Item A: $10
- Item B: $30
- Item C: $60

## Asistente
{ 
    "customer": {
        "name": "John Doe",
        "address": "123 Smith Street"
    },
    "order": { 
        "total": 100,
        "products": [
            {
                "name": "Item A",
                "cost": 10
            },
            {
                "name": "Item B",
                "cost": 30
            },
            {
                "name": "Item C",
                "cost": 60
            }
        ]
    }
}
