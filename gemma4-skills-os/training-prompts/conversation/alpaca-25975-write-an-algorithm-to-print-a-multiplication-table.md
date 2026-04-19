---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25975]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm to print a multiplication table.

Contexto/Input:
No input

## Asistente
//Prints a multiplication table of size n 
void printMultiplicationTable(int n) 
{ 
    // loop to print n rows 
    for (int i = 1; i <= n; i++) 
    { 
        // loop to print n columns 
        // changing column value j  
        for (int j = 1; j <= n; j++) 
        { 
            // printing table values  
            // writing jth values of ith row            
            System.out.print(i*j + "   ");  
        } 
        // inceasing row value i 
        // for next row 
        System.out.println();  
    } 
}
