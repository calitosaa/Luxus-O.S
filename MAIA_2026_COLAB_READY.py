"""
MAIA 2026 - GOOGLE COLAB EXECUTION SCRIPT
Copia TODO el contenido de este archivo a UNA SOLA CELDA DE COLAB y ejecuta
"""

# ============================================================================
# CELL 1: SETUP COMPLETO Y EJECUCIÓN
# ============================================================================

import os
import sys
import subprocess
from pathlib import Path

print("=" * 70)
print("MAIA 2026 - GOOGLE COLAB TRAINING")
print("=" * 70)

# ============================================================================
# Paso 1: OBTENER HF_TOKEN
# ============================================================================
print("\n[PASO 1] Configurando HF_TOKEN...")

try:
    # Intenta obtener de Colab Secrets
    from google.colab import userdata
    hf_token = userdata.get('HF_TOKEN')
    print("✓ HF_TOKEN obtenido de Colab Secrets")
except:
    # Fallback: pedir manualmente
    print("⚠ No se encontró HF_TOKEN en Secrets")
    hf_token = input("Ingresa tu HF_TOKEN: ")

os.environ['HF_TOKEN'] = hf_token

# ============================================================================
# Paso 2: MONTAR GOOGLE DRIVE (OPCIONAL - para checkpoints)
# ============================================================================
print("\n[PASO 2] Montando Google Drive para checkpoints...")

try:
    from google.colab import drive
    drive.mount('/content/drive')
    print("✓ Google Drive montado")
    checkpoint_dir = '/content/drive/MyDrive/maia_checkpoints_2026'
    Path(checkpoint_dir).mkdir(parents=True, exist_ok=True)
except:
    print("⚠ Google Drive no disponible (continuando sin checkpoints)")
    checkpoint_dir = '/tmp/maia_checkpoints'

# ============================================================================
# Paso 3: DESCARGAR REPOSITORIO MAIA
# ============================================================================
print("\n[PASO 3] Descargando repositorio MAIA...")

!git clone https://github.com/calitosaa/Maia.git 2>/dev/null || true
os.chdir('/content/Maia')
!git pull origin claude/auto-load-agents-kVlVN 2>/dev/null || true

print("✓ Repositorio MAIA listo en /content/Maia")

# ============================================================================
# Paso 4: INSTALAR DEPENDENCIAS
# ============================================================================
print("\n[PASO 4] Instalando dependencias...")

deps = [
    'torch',
    'transformers',
    'trl',
    'peft',
    'bitsandbytes',
    'datasets',
    'huggingface-hub',
    'unsloth',
]

for dep in deps:
    print(f"  Instalando {dep}...")
    subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', dep], check=True)

print("✓ Todas las dependencias instaladas")

# ============================================================================
# Paso 5: DESCARGAR SCRIPT AUTOMATIZADO Y EJECUTAR
# ============================================================================
print("\n[PASO 5] Ejecutando entrenamiento MAIA 2026...")
print("=" * 70)

# Ejecutar el script automatizado completo
exec(open('/content/Maia/MAIA_2026_COMPLETE_AUTOMATED.py').read())

print("\n" + "=" * 70)
print("✓ ENTRENAMIENTO COMPLETADO")
print("=" * 70)
print("\nModelo final disponible en:")
print("  https://huggingface.co/calitosaa/maia-2026")
print("\nPuedes usar el modelo con:")
print("""
from transformers import pipeline
generator = pipeline("text-generation", model="calitosaa/maia-2026")
response = generator("Tu pregunta aquí", max_length=256)
print(response[0]['generated_text'])
""")
