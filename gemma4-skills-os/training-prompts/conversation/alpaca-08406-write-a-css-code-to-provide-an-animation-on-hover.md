---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8406]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a CSS code to provide an animation on hover.

## Asistente
The CSS code to provide an animation on hover is:

.element {
  transition: all 0.5s ease-in-out;
}

.element:hover {
  transform: scale3d(1.1, 1.1, 1.1);
  animation-name: animation-on-hover;
  animation-duration: 0.3s;
}

@keyframes animation-on-hover {
  0% {
    border-radius: 0px;
    background-color: blue;
  }
  100% {
    border-radius: 20px;
    background-color: yellow;
  }
}
