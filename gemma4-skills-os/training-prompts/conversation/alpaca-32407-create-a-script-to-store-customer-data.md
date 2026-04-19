---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[32407]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a script to store customer data.

Contexto/Input:
Customer data in the form of first name, last name, phone number and email address.

## Asistente
# script to create a database and store customer data

# import necessary packages
import sqlite3

# create a database connection
db_connection = sqlite3.connect('customer_data.db')

# create a cursor object
cursor_obj = db_connection.cursor()

# create a customer table
cursor_obj.execute("""
CREATE TABLE customer (
    first_name text,
    last_name text,
    phone_number text,
    email_address text
)
""")

# insert data into table
cursor_obj.execute("INSERT INTO customer VALUES ('John', 'Smith', '123-456-7890', 'john@example.com')")
cursor_obj.execute("INSERT INTO customer VALUES ('Sara', 'Jones', '143-456-7890', 'sara@example.com')")

# save changes to the database
db_connection.commit()

# close the connection
db_connection.close()
