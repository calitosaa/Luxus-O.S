---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23180]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a class in Java that implements a data structure.

## Asistente
public class MyDataStructure {
    private int length;
    private int array[];
 
    public MyDataStructure(int size) {
        this.length = size;
        array = new int[size];
    }
 
    public void add(int value) {
        if (length == array.length) {
            increaseSize();
        }
        array[length++] = value;
    }
 
    private void increaseSize() {
        int newLength = array.length * 2;
        int[] newArray = new int[newLength];
        for (int i = 0; i < length; i++) {
            newArray[i] = array[i];
        }
        array = newArray;
    }
 
    public void get(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException();
        }
        return array[index];
    }
 
    public void remove(int value) {
        for (int i = 0; i < length; i++) {
            if (array[i] == value) {
                for (int j = i; j < length-1; j++) {
                    array[j] = array[j+1];
                }
                length--;
                return;
            }
        }
    }
}
