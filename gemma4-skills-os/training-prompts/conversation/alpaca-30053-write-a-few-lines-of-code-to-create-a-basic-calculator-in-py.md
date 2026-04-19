---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[30053]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a few lines of code to create a basic calculator in Python.

## Asistente
def add(x, y): 
   return x + y 

def subtract(x, y): 
   return x - y 

def multiply(x, y): 
   return x * y 

def divide(x, y): 
   return x / y 

num1 = float(input("Enter first number: ")) 
num2 = float(input("Enter second number: ")) 

print("Select operation.") 
print("1.Add") 
print("2.Subtract") 
print("3.Multiply") 
print("4.Divide") 

choice = input("Enter choice(1/2/3/4):") 

if choice == '1': 
   print(num1,"+",num2,"=", add(num1,num2)) 
  
elif choice == '2': 
   print(num1,"-",num2,"=", subtract(num1,num2)) 
   
elif choice == '3': 
   print(num1,"*",num2,"=", multiply(num1,num2)) 

elif choice == '4': 
   print(num1,"/",num2,"=", divide(num1,num2)) 
else: 
   print("Invalid input")
