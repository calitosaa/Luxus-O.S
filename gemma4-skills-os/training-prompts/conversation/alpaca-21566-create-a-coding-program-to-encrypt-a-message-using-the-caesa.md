---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21566]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a coding program to encrypt a message using the Caesar cipher.

Contexto/Input:
Message: "Hello World"

## Asistente
Encrypted message: "Khoor Zruog" 

// Coding Program for Caesar Cipher //
function encrypt(message,key) { 
	let encryptedMessage = ""; 
	for (let i = 0; i < message.length; i++) { 
		let charCode = message.charCodeAt(i); 
		if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) { 
			let cipherChar = charCode + key; 
			if (cipherChar > 90 && cipherChar < 97) { 
				cipherChar = 65 + (cipherChar - 91);		 
			} 
			if (cipherChar > 122){ 
				cipherChar = 97 + (cipherChar - 123);		 
			} 
			encryptedMessage += String.fromCharCode(cipherChar); 
		} else { 
			encryptedMessage += String.fromCharCode(charCode); 
		} 
	} 
	return encryptedMessage;
} 
let encryptedMsg = encrypt("Hello World", 3);
console.log(encryptedMsg); // Khoor Zruog
