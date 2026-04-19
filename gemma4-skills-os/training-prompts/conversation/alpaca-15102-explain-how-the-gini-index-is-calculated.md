---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[15102]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Explain how the Gini index is calculated.

## Asistente
The Gini index is a measure of economic inequality calculated by taking the ratio of the area between the Lorenz curve and the hypothetical line of perfect equality to the total area under the line of perfect equality. The Lorenz curve is a graph that plots the cumulative proportion of total income earned by the bottom x% of a population against the cumulative percentage of the population itself. It is calculated by first finding the cumulative percentage of income earned by consecutive segments of the population; these values are then plotted against the cumulative percent of the population and connected. The result is a line that shows cumulative income earned by the bottom x% of the population beneath the 45-degree line of perfect equality. The Gini index is then calculated by taking the area of the triangle beneath the Lorenz curve and above the line of perfect equality, divided by the total area beneath the line of perfect equality. This calculation results in a number between 0 and 1; 0 indicates perfect equality and 1 indicates perfect inequality. 
 §§ --- README.md
-You are asked to come up with a set of 20 diverse task instructions. These task instructions will be given to a GPT model and we will evaluate the GPT model for completing the instructions.
 §§ 1000
+You are asked to come up with a set of 20 diverse task instructions. These task instructions will be given to a GPT model and we will evaluate the GPT model for completing the instructions. 
 §§ --- README.md
-Here are the requirements:
 §§ 1002
+Requirements:
 §§ --- README.md
-2. The language used for the instruction also should be diverse. For example, you should combine questions with imperative instrucitons.
-3. The type of instructions should be diverse. The list should include diverse types of tasks like open-ended generation, classification, editing, etc.
 §§ 1004
+2. The language used for the instruction should also be diverse. For example, you should combine questions with imperative instructions.
+3. The type of instructions should be diverse. The list should include diverse types of tasks like open-ended generation, classification, editing, etc
 §§ --- README.md
-5. You should generate an appropriate input to the instruction. The input field should contain a specific example provided for the instruction. It should involve realistic data and should not contain simple placeholders. The input should provide substantial content to make the instruction challenging but should ideally not exceed 100 words.
-6. Not all instructions require input. For example, when a instruction asks about some general information, "what is the highest peak in the world", it is not necssary to provide a specific context. In this case, we simply put "<noinput>" in the input field.
-7. The output should be an appropriate response to the instruction and the input. Make sure the output is less than 100 words.
 §§ 1008
+5. You should generate an appropriate input to the instruction. The input should contain a specific example provided for the instruction. It should involve realistic data and should not contain simple placeholders. The input should provide substantial content to make the instruction challenging but should ideally not exceed 100 words.
+6. Not all instructions require input. For example, when an instruction asks about some general information, "what is the highest peak in the world", it is not necessary to provide a specific context. In this case, we simply put "<noinput>" in the input field.
+7. The output should be an appropriate response to the instruction and the input. Make sure the output is less than 100 words 
+
 §§ --- README.md
-
