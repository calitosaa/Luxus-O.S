---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[11254]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a class for a computer programming language.

## Asistente
class Program {
    private String language;
    private int numLines;
    private List<String> commands;
    
    public Program(String language) {
        this.language = language;
        this.numLines = 0;
        this.commands = new ArrayList<>();
    }
    
    public void addLine(String command) {
        this.commands.add(command);
        this.numLines++;
    }
    
    public List<String> getCommands() {
        return this.commands;
    }
    
    public int getNumLines() {
        return this.numLines;
    }
    
    public String getLanguage() {
        return this.language;
    }
    
    public void execute() {
        for (String command : this.commands) {
            switch(this.language) {
                case 'Python':
                    //execute python command
                    break;
                case 'Java':
                    //execute java command
                    break;
                case 'C#':
                    //execute C# command
                    break;
            }
        }
    }
}
