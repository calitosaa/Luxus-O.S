---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[39426]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a REST API which adds two numbers provided by the user.

## Asistente
from flask import Flask, request

app = Flask(__name__)

@app.route('/add_two_numbers', methods=['GET', 'POST'])
def add_two_numbers():
    if request.method == 'POST':
        # get data from the request 
        data = request.get_json()
        
        # extract the numbers from the data 
        num1 = data["num1"]
        num2 = data["num2"]
        
        # add the numbers 
        result = num1 + num2
        
        # return the response 
        return {'result': result}
    
if __name__ == '__main__':
    app.run()
