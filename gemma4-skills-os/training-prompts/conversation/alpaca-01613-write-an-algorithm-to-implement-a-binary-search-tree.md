---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1613]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm to implement a binary search tree.

## Asistente
def insert(node, data): 
    # If the tree is empty, return a new node 
    if node is None: 
        return Node(data) 
  
    # Otherwise, recur down the tree
    if data < node.data: 
        node.left = insert(node.left, data) 
    else: 
        node.right = insert(node.right, data) 
  
    # return the (unchanged) node pointer 
    return node 
  
# Function to search a given data 
def search(node, data): 
      
    # Base Case: if root is None or key is present at root 
    if node is None or node.data == data: 
        return node 
  
    # Key is greater than root's key 
    if node.data < data: 
        return search(node.right, data) 
  
    # Key is smaller than root's key 
    return search(node.left, data)
