---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6755]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a sample form template for collecting user feedback.

## Asistente
<form>
    <h2>User Feedback Survey</h2>
    <p>Please answer the following questions about your experience with our product. Your feedback will help us improve our services for future users.</p>
    
    <label for="overallRating">Overall Rating</label>
    <select name="overallRating">
        <option>1 - Poor</option>
        <option>2 - Fair</option>
        <option>3 - Good</option>
        <option>4 - Very Good</option>
        <option>5 - Excellent</option>
    </select>

    <label for="easeOfUse">Ease of Use</label>
    <select name="easeOfUse">
        <option>1 - Poor</option>
        <option>2 - Fair</option>
        <option>3 - Good</option>
        <option>4 - Very Good</option>
        <option>5 - Excellent</option>
    </select>

    <label for="features">Features</label>
    <select name="features">
        <option>1 - Poor</option>
        <option>2 - Fair</option>
        <option>3 - Good</option>
        <option>4 - Very Good</option>
        <option>5 - Excellent</option>
    </select>

    <label for="valueForMoney">Value for Money</label>
    <select name="valueForMoney">
        <option>1 - Poor</option>
        <option>2 - Fair</option>
        <option>3 - Good</option>
        <option>4 - Very Good</option>
        <option>5 - Excellent</option>
    </select>

    <label for="comments">Comments</label><br>
    <textarea name="comments" rows="5" cols="70"></textarea>

    <input type="submit" value="Submit">

</form>
