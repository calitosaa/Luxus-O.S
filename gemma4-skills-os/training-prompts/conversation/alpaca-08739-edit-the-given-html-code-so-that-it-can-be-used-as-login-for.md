---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8739]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Edit the given HTML code so that it can be used as login form.

Contexto/Input:
<form>
<label>Username</label>
<textfield width="20">
</form>

## Asistente
<form>
  <label>Username</label>
  <input type="text" name="username" width="20" />
  <label>Password</label>
  <input type="password" name="password" width="20" />
  <input type="submit" value="Login" />
</form>
