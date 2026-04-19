---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25154]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function in Python that evaluates a given expression.

## Asistente
def evaluate_expression(expression): 
      
    # a stack to store integer values 
    values = [] 
  
    # a stack to store operators. 
    ops = [] 
    i = 0
      
    while i < len(expression): 
          
        # Current token is a whitespace, 
        # skip it. 
        if expression[i] == ' ': 
            i += 1
            continue
              
        # Current token is an opening  
        # brace, push it to 'ops' 
        elif expression[i] == '(': 
            ops.append(expression[i]) 
              
        # Current token is a number, push  
        # it to stack for numbers. 
        elif expression[i].isdigit(): 
            val = 0
              
            # There may be more than one 
            # digits in the number. 
            while (i < len(expression) and
                expression[i].isdigit()): 
                  
                val = (val * 10) + int(expression[i]) 
                i += 1
                  
            values.append(val) 
  
        # Closing brace encountered, solve  
        # entire brace. 
        elif expression[i] == ')': 
              
            while len(ops) != 0 and ops[-1] != '(': 
                  
                val2 = values.pop() 
                val1 = values.pop() 
                op = ops.pop() 
                  
                values.append(performOp(val1, val2, op)) 
              
            # pop opening brace. 
            ops.pop() 
              
        # Current token is an operator. 
        else: 
              
            # While top of 'ops' has same or  
            # greater precedence to current 
            # token, which is an operator. 
            # Apply operator on top of 'ops'  
            # to top two elements in values stack. 
            while (len(ops) != 0 and
                precedence(ops[-1]) >= precedence(expression[i])): 
                  
                val2 = values.pop() 
                val1 = values.pop() 
                op = ops.pop() 
                  
                values.append(performOp(val1, val2, op)) 
                  
            # Push current token to 'ops'. 
            ops.append(expression[i]) 
          
        i += 1
          
     # Entire expression has been parsed at this  
    # point, apply remaining ops to remaining 
    # values. 
    while len(ops) != 0: 
          
        val2 = values.pop() 
        val1 = values.pop() 
        op = ops.pop() 
          
        values.append(performOp(val1, val2, op)) 
      
    # Top of 'values' contains result, return it. 
    return values[-1]
