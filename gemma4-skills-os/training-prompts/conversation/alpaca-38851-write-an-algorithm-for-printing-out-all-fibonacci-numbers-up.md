---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[38851]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm for printing out all Fibonacci numbers up to 100.

## Asistente
//Fibonacci sequence algorithm 
 
//Set up two variables to track the current and last number
var current = 0; 
var last = 1; 

//Loop from 0 to 100
for (var i = 0; i < 100; i++) { 
 
  //Calculate the next Fibonacci number as the sum of the two variables 
  var temp = current + last; 
 
  //Print out the current number 
  console.log(current); 
 
  //Rebind the last number to the current number 
  last = current;  
  
  //Rebind the current number to the value stored in the temp variable 
  current = temp; 
}
