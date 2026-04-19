---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18705]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a library of code that implements a linked list data structure.

## Asistente
// Code implementing a linked list
 
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
 
class LinkedList {
  constructor() {
    this.head = null;
  }
 
  insert(value) {
    //Insert Code Here
  }
 
  includes(value) {
    //Search Code Here
  }
 
  //Additional methods(append, insertBefore, insertAfter, kthFromEnd)
}
