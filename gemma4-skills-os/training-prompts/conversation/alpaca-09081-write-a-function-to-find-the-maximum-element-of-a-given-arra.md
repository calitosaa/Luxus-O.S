---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9081]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to find the maximum element of a given array.

Contexto/Input:
int array[] = {8, 3, 5, 9, 3, 1, 5};

## Asistente
int findMax(int array[])
{
    int max = array[0];
    for (int i = 1; i < sizeof(array)/sizeof(array[0]); i++)
    {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}
