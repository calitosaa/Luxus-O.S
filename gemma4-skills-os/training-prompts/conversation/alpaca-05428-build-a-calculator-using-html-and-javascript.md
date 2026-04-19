---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5428]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Build a calculator using HTML and JavaScript.

Contexto/Input:
Noinput

## Asistente
The HTML code for the calculator would look like this:
<form>
  <input type="text" id="calculator-screen" disabled>
</form>
<button type="button" id="zero" onclick="addNum(0)">0</button>
<button type="button" id="one" onclick="addNum(1)">1</button>
<button type="button" id="two" onclick="addNum(2)">2</button>
<button type="button" id="three" onclick="addNum(3)">3</button>
<button type="button" id="add" onclick="calculate('+')">+</button>
<button type="button" id="subtract" onclick="calculate('-')">-</button>
<button type="button" id="multiply" onclick="calculate('*')">*</button>
<button type="button" id="divide" onclick="calculate('/')">/</button>
<button type="button" id="equal" onclick="calculate('=')">=</button>

And the JavaScript code for the calculator would look like this:

function addNum(num) {
  var screen = document.getElementById('calculator-screen');
  screen.value += num;
}

function calculate(sign) {
  var screen = document.getElementById('calculator-screen');
  var result;
  switch(sign) {
    case '+':
      result = eval(screen.value);
      break;
    case '-':
      result = eval(screen.value);
      break;
    case '*':
      result = eval(screen.value);
      break;
    case '/':
      result = eval(screen.value);
      break;
    case '=':
      result = eval(screen.value);
      break;
  }
  screen.value = result;
}
