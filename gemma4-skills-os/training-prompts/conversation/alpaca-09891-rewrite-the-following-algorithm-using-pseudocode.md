---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9891]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Rewrite the following algorithm using pseudocode.

Contexto/Input:
function simpleSum(n: INTEGER)
// calculates the sum of the first n natural numbers
var sum, number: INTEGER
sum := 0
number := 0

while number < n do
  sum := sum + number
  number := number + 1
end while

return sum

## Asistente
FUNCTION simpleSum(n: INTEGER) 
    // declares variables 
    DECLARE sum, number : INTEGER 

    // sets initial values to 0 
    SET sum = 0 
    SET number = 0 

    // loop until n is reached 
    WHILE number < n DO
        SET sum = sum + number 
        SET number = number + 1 
    END WHILE 

    // returns the sum
    RETURN sum 
END FUNCTION
