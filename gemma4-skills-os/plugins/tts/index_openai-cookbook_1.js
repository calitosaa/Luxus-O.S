---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/voice_solutions/one_way_translation_using_realtime_api/src/lib/wavtools/index.js
license: MIT
category: plugins/tts
imported_at: 2026-04-19
---

import { WavPacker } from './lib/wav_packer.js';
import { AudioAnalysis } from './lib/analysis/audio_analysis.js';
import { WavStreamPlayer } from './lib/wav_stream_player.js';
import { WavRecorder } from './lib/wav_recorder.js';

export { AudioAnalysis, WavPacker, WavStreamPlayer, WavRecorder };
