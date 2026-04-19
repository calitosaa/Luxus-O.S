---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21679]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write code to convert an array of integers into a binary tree.

Contexto/Input:
Input array: [1, 2, 3, 4]

## Asistente
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def arrayToBinaryTree(arr):
    root = Node(arr[0])
    q = [root]
    i = 1
    while i < len(arr):
        node = q.pop(0)
        node.left = Node(arr[i])
        q.append(node.left)
        i += 1

        if i == len(arr):
            break
        
        node.right = Node(arr[i])
        q.append(node.right)
        i += 1

    return root
