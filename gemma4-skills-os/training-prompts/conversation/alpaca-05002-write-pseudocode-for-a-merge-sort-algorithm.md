---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5002]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write pseudocode for a Merge Sort algorithm.

## Asistente
MergeSort(A, startIndex, endIndex):
    // If there is only one element in the array, return
    if startIndex == endIndex:
        return

    middleIndex = (startIndex + endIndex) / 2

    // Sort the left half of the array
    MergeSort(A, startIndex, middleIndex)

    // Sort the right half of the array
    MergeSort(A, middleIndex + 1, endIndex)

    // Merge the two sorted arrays
    Merge(A, startIndex, endIndex)

Merge(A, startIndex, endIndex):
    middleIndex = (startIndex + endIndex) / 2
    leftIndex = startIndex
    rightIndex = middleIndex + 1

    // Temporary array to hold the sorted array
    tempArray[]

    // Iterate through both halves of the array
    for i in range(startIndex, endIndex+1):
        // If left half is done iterating, add from right half
        if leftIndex > middleIndex:
            tempArray[i] = A[rightIndex]
            rightIndex++

        // If right half is done iterating, add from left half
        else if rightIndex > endIndex:
            tempArray[i] = A[leftIndex]
            leftIndex++

        // Compare current element and add the smaller element
        else if A[leftIndex] < A[rightIndex]:
            tempArray[i] = A[leftIndex]
            leftIndex++
        else:
            tempArray[i] = A[rightIndex]
            rightIndex++

    // Copy the tempArray back to A
    for i in range(startIndex, endIndex+1):
        A[i] = tempArray[i]
