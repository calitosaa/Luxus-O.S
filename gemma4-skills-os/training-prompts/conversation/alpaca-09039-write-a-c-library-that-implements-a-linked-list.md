---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9039]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a C++ library that implements a linked list

## Asistente
#include<iostream>
using namespace std;

struct Node {
    int data;
    struct Node *next;
};

// Add a new node to the end of the list 
void append(struct Node** head_ref, int new_data) 
{ 
    Node* new_node = new Node; 
  
    Node *last = *head_ref;
  
    new_node->data = new_data; 
  
    new_node->next = NULL; 
  
    if (*head_ref == NULL) { 
        *head_ref = new_node; 
        return; 
    } 
  
    while (last->next != NULL) 
        last = last->next; 
  
    last->next = new_node; 
    return; 
} 

// Delete the node at a given position 
void deleteNode(struct Node **head_ref, int position) 
{ 
    if (*head_ref == NULL) 
        return; 
    struct Node *temp = *head_ref; 
    if (position == 0) 
    { 
        *head_ref = temp->next;   
        free(temp);               
        return; 
    } 

   for (int i=0; temp!=NULL && i<position-1; i++) 
         temp = temp->next; 
  
    if (temp == NULL || temp->next == NULL) 
         return; 
  
   struct Node *next = temp->next->next; 

   free(temp->next);  
   temp->next = next;  
}
