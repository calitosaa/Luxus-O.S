---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6463]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a data set, write a program that counts the number of instances of each label.

Contexto/Input:
Data Set:

['puppy', 'dog', 'kitten', 'cat', 'puppy', 'dog', 'fish', 'cat']

## Asistente
#include<stdio.h>
#include <string.h>
 
int main() 
{
    char data[][10] = {"puppy","dog","kitten","cat","puppy","dog","fish","cat"};
    int puppy_count = 0;
    int dog_count = 0;
    int kitten_count = 0;
    int cat_count = 0;
    int fish_count = 0;
    int i;
    int size = sizeof(data)/10;
 
    for(i=0;i<size;i++)
    {
        if(strcmp(data[i],"puppy")==0)
            puppy_count++;
        if(strcmp(data[i],"dog")==0)
            dog_count++;
        if(strcmp(data[i],"kitten")==0)
            kitten_count++;
        if(strcmp(data[i],"cat")==0)
            cat_count++;
        if(strcmp(data[i],"fish")==0)
            fish_count++;
    }
    printf("puppy count is %d\ndog count is %d\nkitten count is %d\ncat count is %d\nfish count is %d\n",
    puppy_count, dog_count, kitten_count, cat_count, fish_count);
 
    return 0;
  }
