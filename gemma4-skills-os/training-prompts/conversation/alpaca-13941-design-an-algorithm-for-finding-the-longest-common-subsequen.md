---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13941]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm for finding the longest common subsequence between two strings

Contexto/Input:
s1 = 'ABCDGH'
s2 = 'AEDFHR'

## Asistente
def LCS(s1, s2): 
    m = len(s1) 
    n = len(s2)
  
    # declaring the array for storing the dp values 
    L = [[None]*(n + 1) for _ in range(m + 1)] 
  
    """Following steps build L[m + 1][n + 1] in bottom up fashion 
    Note: L[i][j] contains length of LCS of X[0..i-1] 
    and Y[0..j-1]"""
    for i in range(m + 1): 
        # previoius row is all zeros, 
        # as no common sequence can make using them 
        for j in range(n + 1): 
            # first columns of all rows are 0 
            if i == 0 or j == 0 : 
                L[i][j] = 0
            elif s1[i-1] == s2[j-1]: 
                L[i][j] = L[i-1][j-1]+1
            else: 
                L[i][j] = max(L[i-1][j] , L[i][j-1]) 
  
    # L[m][n] contains the length of LCS of X[0..n-1] & Y[0..m-1] 
    return L[m][n]
