---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28299]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a valid JSON schema for a customer profile.

## Asistente
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Customer Profile",
  "description": "A customer profile contains information about an individual customer",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "minLength": 1
    },
    "lastName": {
      "type": "string",
      "minLength": 1
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "zip": {
          "type": "string"
        }
      },
      "required": ["street", "city", "state", "zip"]
    },
    "phoneNumber": {
      "type": "string"
    },
    "email": {
      "type": "string"
    }
  },
  "required": ["firstName", "lastName", "address", "phoneNumber", "email"]
}
