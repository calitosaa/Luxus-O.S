---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23079]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function in Java to print the first 10 numbers of the Fibonacci sequence.

## Asistente
public class Fibonacci { 
    public static void main(String args[]) {
        int n1=0,n2=1,n3;    
        System.out.print(n1+" "+n2);
        for (int i=2; i<10; i++)
        {    
            n3=n1+n2;    
            System.out.print(" "+n3);    
            n1=n2;    
            n2=n3;    
        }   
    }
}
