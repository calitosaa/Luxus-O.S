---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20006]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Compose a C# program to calculate the compound interest rate of an investment.

## Asistente
public class CompoundInterestCalculator
{
    public static double CalculateCompoundInterest(double principal, double rateOfInterest, int numberOfPeriods)
    {
        return (principal * Math.Pow(1 + (rateOfInterest/100), numberOfPeriods)) - principal;
    }
}
