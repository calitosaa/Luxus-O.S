---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[33662]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a login / signup form

## Asistente
<html>
<head>
  <title>Login / Signup Form</title>
</head>
<body>
  <!-- Form to log in an existing user -->
  <h1>Login</h1>
  <form action="process_login.php" method="post">
    <div>
      <label for="username">Username:</label>
      <input type="text" name="username" id="username">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password">
    </div>
    <input type="submit" name="submit" value="Login">
  </form>
  <!-- Form to create a new account -->
  <h1>Signup</h1>
  <form action="process_signup.php" method="post">
    <div>
      <label for="username">Create a Username:</label>
      <input type="text" name="username" id="username">
    </div>
    <div>
      <label for="password">Create a Password:</label>
      <input type="password" name="password" id="password">
    </div>
    <div>
      <label for="email">Enter your Email:</label>
      <input type="text" name="email" id="email">
    </div>
    <input type="submit" name="submit" value="Signup">
  </form>
</body>
</html>
