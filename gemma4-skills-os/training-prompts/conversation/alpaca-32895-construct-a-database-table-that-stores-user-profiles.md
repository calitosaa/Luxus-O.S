---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[32895]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a database table that stores user profiles.

## Asistente
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(255) NULL,
    country VARCHAR(255) NULL,
    phone_number VARCHAR(20) NULL,
    PRIMARY KEY (id)
);
