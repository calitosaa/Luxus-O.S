---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[11461]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Java program which finds the maximum number from a given array

## Asistente
public class MaxNumber {
    public static int findMax(int[] arr) {
        int max = Integer.MIN_VALUE;
        for (int i=0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] numbers = {2, 3, 1, 5, 9};
        int max = findMax(numbers);
        System.out.println("The maximum number is: " + max);
    }
}
