---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[34847]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a HTML grid layout.

Contexto/Input:
6 rows, 3 columns

## Asistente
<style> 
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 10px;
  }

</style>

<div class="grid-container">
  <div> Content 1 </div> 
  <div> Content 2 </div> 
  <div> Content 3 </div> 
  <div> Content 4 </div> 
  <div> Content 5 </div> 
  <div> Content 6 </div>  
</div>
