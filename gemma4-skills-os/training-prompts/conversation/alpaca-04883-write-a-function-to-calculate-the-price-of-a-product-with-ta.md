---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[4883]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to calculate the price of a product with taxes.

Contexto/Input:
price = 100, tax rate = 0.2

## Asistente
const calculatePrice = (price, taxRate) => {
   return (price * (1+taxRate)).toFixed(2);
} 

calculatePrice(100, 0.2) // 1
