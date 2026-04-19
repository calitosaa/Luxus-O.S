---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[35658]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Use the K-nearest neighbors algorithm to classify data points.

Contexto/Input:
Data points: [[1,2],[2,4],[2,3],[3,5],[3,1],[5,5],[5,3],[6,1],[6,2],[6,4]]

## Asistente
"""
ALgorithm to classify data points using K-nearest neighbors
"""

def knn(data_points, k):
    labels = []

    for point in data_points:
        distances = []
        for other_point in data_points:
            if point != other_point:
                distances.append(((point[0] - other_point[0]) ** 2 + (point[1] - other_point[1]) ** 2) ** 0.5)
        #sort the distances 
        sorted_distances = sorted(distances)
        #find the k-nearest neighbours
        k_nearest = sorted_distances[:k]
        #determine label using majority vote 
        labels.append(majority_vote(k_nearest))
        
    return labels 

def majority_vote(k_nearest):
    #code to find majority vote
    pass 

if __name__ == '__main__':
    data_points = [[1,2],[2,4],[2,3],[3,5],[3,1],[5,5],[5,3],[6,1],[6,2],[6,4]]
    k = 3
    print(knn(data_points, k))
