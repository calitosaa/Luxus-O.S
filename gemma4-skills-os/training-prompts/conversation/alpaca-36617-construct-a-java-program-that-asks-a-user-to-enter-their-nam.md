---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[36617]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a Java program that asks a user to enter their name and age and prints out a greeting message.

## Asistente
import java.util.Scanner;

public class GreetingMessage {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.println("Please enter your name:");
    String name = scanner.nextLine();
    
    System.out.println("Please enter your age:");
    int age = Integer.parseInt(scanner.nextLine());
    
    System.out.println("Hello " + name + "! It's great to see you at the age of " + age + ".");
  }
  
}
