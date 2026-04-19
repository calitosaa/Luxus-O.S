---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40668]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that returns the codes of the characters of a given string.

Contexto/Input:
string str = "Hello World!";

## Asistente
void getCharCodes(string str) {
    for (int i = 0; i < str.length(); i++) {
        cout << "Character " << str[i] << " has the code: " << (int)str[i] << endl;
    }
}
