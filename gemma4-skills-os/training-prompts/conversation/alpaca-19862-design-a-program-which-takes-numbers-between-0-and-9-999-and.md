---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19862]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a program which takes numbers between 0 and 9,999 and prints the spoken version of the number.

## Asistente
def convert_to_spoken(num):
    if not num:
        return 'zero'
    
    if num > 9999:
        print('Number must be smaller than 10,000')
        return
    
    singles = {1: 'one', 2: 'two', 3: 'three', 4: 'four',
        5: 'five', 6: 'six', 7: 'seven', 8: 'eight',
        9: 'nine'
    }
    
    teens = {10: 'ten', 11: 'eleven', 12: 'twelve',
        13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
        19: 'nineteen'
    }
    
    tens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
        6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
    }
    
    # create list of steps based on number length
    steps = [
        (' thousand', 1000000), (' hundred', 1000),
        ('', 0)
    ]
    
    # break the number into 3 digits each
    digits = []
    while num > 0:
        r = num % 1000
        digits.insert(0, r)
        num //= 1000
    
    spoken_num = []
    # convert the each 3-digit to spoken format
    for i, dig in enumerate(digits):
        if dig == 0:
            continue
        
        lbl, step = steps[i]
        a, b = divmod(dig, step)
        
        spoken_num.append(convert_to_spoken_3dig(a, b, 
            singles, teens, tens))
        spoken_num.append(lbl)
    
    return ' '.join(spoken_num)

def convert_to_spoken_3dig(a, b, singles, teens, tens):
    spoken_nums = []
    
    # convert hundreds place
    if a:
        spoken_nums.append(singles[a] + ' hundred')
    
    # convert tens place
    if b:
        if b in singles:
            spoken_nums.append(singles[b])
        elif b in teens:
            spoken_nums.append(teens[b])
        else:
            t, o = divmod(b, 10)
            spoken_nums.append(tens[t])
            if o:
                spoken_nums.append(singles[o])
    
    return ' '.join(spoken_nums)
