---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5899]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a simple react component structure

## Asistente
import React from 'react';
 
const MyComponent = () => {
 return ( 
   <div>
     <h1>My Component</h1>
     <p>Content goes here.</p>
   </div>
 )
};
 
export default MyComponent;
