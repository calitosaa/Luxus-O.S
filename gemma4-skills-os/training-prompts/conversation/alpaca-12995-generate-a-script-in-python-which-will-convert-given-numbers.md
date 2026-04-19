---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[12995]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a script in Python which will convert given numbers in to words.

## Asistente
def get_string(number):
    if(number == 0): 
        return 'zero' 
    if (number < 0):  
        return 'minus ' + get_string(-1 * number) 
       
    if (number > 0): 
 
        a = ["","one ","two ","three ","four ", "five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "] 
         
        b = ["","","twenty ","thirty ","forty ", "fifty ","sixty ","seventy ","eighty ","ninety "] 
         
        if (number < 20): 
            return a[number]  

        if (number < 100): 
            return b[number//10] + get_string(number%10) 
          
    return get_string(number//100) + "hundred " + get_string(number%100)
