---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20194]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Rewrite the code in pseudocode.

Contexto/Input:
for(int i=0; i <= n; i++) {
  int x = A[i];
  for(int j=0; j < n; j++) {
    if(x == A[j]) {
      A[j] = -1;
    }
  }
}

## Asistente
// For each number in list A, check whether it is present in the list again and if it is, replace it with -1
FOR i = 0 TO n 
  x = A[i] 
  FOR j = 0 TO n 
    IF x = A[j]
      A[j] = -1 
    END IF 
  END FOR 
END FOR
