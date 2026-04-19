---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2781]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a script to find the longest palindrome in a given string

## Asistente
"""
Find the longest palindrome in a given string
"""

def find_longest_palindrome(s):
	# Initialize result 
	max_length = 1	 
	
	# Initialize start and end index
	start, end = 0, 0
	
	# Iterate over the input string
	for i in range(1, len(s)):
				
		# Find the longest even length palindrome
		low, high = i-1, i 
		while low >= 0 and high < len(s) and s[low] == s[high]:
			if high - low + 1 > max_length:
				start = low 
				end = high 
				max_length = high - low + 1 
			low -= 1
			high += 1
		# Find the longest odd length palindrome
		low, high = i-1, i+1 
		while low >= 0 and high < len(s) and s[low] == s[high]: 
			if high - low + 1 > max_length:
				start = low 
				end = high 
				max_length = high - low + 1 
			low -= 1
			high += 1
	
	# return result
	return s[start:end+1]
	
if __name__ == '__main__':
	s = "babad"
	print("The longest palindrome is: ", end="")
	print(find_longest_palindrome(s))
