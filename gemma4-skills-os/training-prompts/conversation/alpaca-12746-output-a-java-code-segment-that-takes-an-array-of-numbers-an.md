---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[12746]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Output a Java code segment that takes an array of numbers and returns the median value

## Asistente
public static double getMedian(int[] a) 
{ 
    Arrays.sort(a); 
    int len = a.length; 
    if (len % 2 == 0) 
        return (a[(len/2)] +  
                a[(len/2)-1]) / 2; 
    else
        return a[len/2]; 
}
