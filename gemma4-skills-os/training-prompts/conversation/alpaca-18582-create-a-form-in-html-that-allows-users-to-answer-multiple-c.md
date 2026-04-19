---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18582]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a form in HTML that allows users to answer multiple-choice questions.

Contexto/Input:
Questions:
Q1. Which of the following are mammals?
a. Human
b. Fish
c. Parrot
d. Snake

Q2. Who is the president of France?
a. Angela Merkel
b. Recep Tayyip Erdogan
c. Joe Biden
d. Emmanuel Macron

## Asistente
<form>
  <h2>Multiple Choice Questions</h2>
  <p>Q1. Which of the following are mammals?</p>
  <label><input type="radio" name="question1" value="a">a. Human</label><br>
  <label><input type="radio" name="question1" value="b">b. Fish</label><br>
  <label><input type="radio" name="question1" value="c">c. Parrot</label><br>
  <label><input type="radio" name="question1" value="d">d. Snake</label><br>
  <p>Q2. Who is the president of France?</p>
  <label><input type="radio" name="question2" value="a">a. Angela Merkel</label><br>
  <label><input type="radio" name="question2" value="b">b. Recep Tayyip Erdogan</label><br>
  <label><input type="radio" name="question2" value="c">c. Joe Biden</label><br>
  <label><input type="radio" name="question2" value="d">d. Emmanuel Macron</label><br>
  <input type="submit" value="Submit">
</form>
