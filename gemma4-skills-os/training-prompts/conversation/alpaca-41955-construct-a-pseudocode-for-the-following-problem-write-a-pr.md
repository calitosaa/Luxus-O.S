---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41955]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a pseudocode for the following problem: Write a program to calculate the average of three numbers.

## Asistente
START
  SET total = 0
  SET count = 0
  READ number
  WHILE number != -1
    SET total = total + number
    SET count = count + 1
    READ number
  ENDWHILE
  IF count != 0
    SET avg = total / count
    PRINT avg
  ENDIF
END
