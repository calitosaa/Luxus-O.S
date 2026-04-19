---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[31658]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a c program that takes a string from the user and reverses it

## Asistente
#include<stdio.h> 
#include<string.h> 
  
// Function to reverse any sequence starting with pointer 
// begin and ending with pointer end 
void Reverse(char* begin, char* end) 
{ 
    char temp; 
    while (begin < end) { 
        temp = *begin; 
        *begin++ = *end; 
        *end-- = temp; 
    } 
} 
  
// Function to reverse words*/ 
void ReverseWords(char* s) 
{ 
    char* word_begin = s; 
  
    // Word boundary 
    char* temp = s; 
  
    // Revert string 
    Reverse(s, temp); 
  
    // Revert each word 
    while (*temp) { 
        temp++; 
        if (*temp == '\0') { 
            Reverse(word_begin, temp - 1); 
        } else if (*temp == ' ') { 
            Reverse(word_begin, temp - 1); 
            word_begin = temp + 1; 
        } 
    } 
} 
  
// Driver code 
int main() 
{ 
    char s[] = "Welcome to Geeksforgeeks"; 
    char* temp = s; 
    ReverseWords(s); 
    printf("%s", s); 
  
    return 0; 
}
