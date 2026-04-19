---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6459]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a C program that prints the first 10 terms of the Fibonacci sequence.

## Asistente
#include<stdio.h>
 
int main()
{
   int i, n1 = 0, n2 = 1, n3;
 
   printf("The first 10 terms of the Fibonacci sequence are:\n");
   printf("%d\n%d\n", n1, n2);
 
   for (i = 3; i <= 10; ++i) 
   {
      n3 = n1 + n2;
      printf("%d\n", n3);
      n1 = n2;
      n2 = n3;
   }
   return 0;
}
