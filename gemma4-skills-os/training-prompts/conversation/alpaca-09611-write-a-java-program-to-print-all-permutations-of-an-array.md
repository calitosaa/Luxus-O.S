---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9611]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Java program to print all permutations of an array.

## Asistente
import java.util.Arrays; 

public class Permutations { 
	public static void main (String[] args) {
		int[] arr = {1, 2, 3}; 
		permute(arr, 0); 
	} 

	public static void permute(int[] arr, int index){ 
		if (index >= arr.length - 1){ 
			System.out.println(Arrays.toString(arr)); 
		} 

		for (int i = index; i < arr.length; i++){ 
			swap(arr, index, i); 
			permute(arr, index + 1); 
			swap(arr, index, i); 
		} 
	} 

	public static void swap(int[] arr, int i, int j){ 
		int temp = arr[i]; 
		arr[i] = arr[j]; 
		arr[j] = temp; 
	} 
}
