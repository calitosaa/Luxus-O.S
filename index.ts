/**
 * Luxus O.S  -  Entry point (CLI Maia)
 *
 *   npm run dev -- "tu pregunta"
 *   npm run dev -- --category agents "como funciona auto-agent"
 */

import { MaiaBrain } from './Maia/maia-brain.js';

async function main() {
  const args = process.argv.slice(2);
  let category: string | undefined;
  const positional: string[] = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--category' && args[i + 1]) { category = args[++i]; }
    else positional.push(args[i]);
  }

  const prompt = positional.join(' ').trim();
  if (!prompt) {
    console.log('Uso: npm run dev -- [--category <folder>] "<tu prompt>"');
    console.log('Ej:  npm run dev -- --category skills "explica la skill de debug"');
    process.exit(1);
  }

  console.log('==========================================');
  console.log('   Luxus O.S   |   Maia   |   Gemma 4 E4B ');
  console.log('==========================================\n');

  const brain = new MaiaBrain(8);
  try {
    await brain.chat(prompt, {
      category,
      onToken: (t) => process.stdout.write(t),
    });
    process.stdout.write('\n');
  } catch (err) {
    console.error('\n[maia] error:', (err as Error).message);
    console.error('¿Esta Ollama corriendo con el modelo "maia" creado y "nomic-embed-text" descargado?');
    process.exit(2);
  }
}

main();
