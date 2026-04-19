---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/voice_solutions/one_way_translation_using_realtime_api/src/reportWebVitals.ts
license: MIT
category: plugins/tts
imported_at: 2026-04-19
---

import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
