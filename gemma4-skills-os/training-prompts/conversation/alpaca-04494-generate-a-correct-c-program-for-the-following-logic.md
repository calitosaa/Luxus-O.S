---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[4494]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a correct C++ program for the following logic.

Contexto/Input:
Given a positive number N, print the numbers from 1 to N in reverse order.

## Asistente
#include<iostream>
 
using namespace std;
 
int main()
{
    int n;
    cin>>n;
    for(int i=n;i>=1;i--){
        cout << i << " ";
    }
    return 0;
}
