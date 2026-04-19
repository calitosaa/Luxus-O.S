---
source_repo: https://github.com/beercss/beercss
source_file: src/home/wavesAndRipples.vue
license: MIT
category: skills/design
imported_at: 2026-04-19
---

<template lang="pug">
#waves-and-ripples
  .large-space
  h4.middle-align(aria-hidden="true")
    span Waves and ripples
    button.chip.circle(@click="domain.showSamples(data, '#waves-and-ripples-example button, #waves-and-ripples-example article, #waves-and-ripples-example a', 'Waves and ripples', null, 'https://github.com/beercss/beercss/blob/main/docs/HELPERS.md')")
      i code
  .medium-space
  #waves-and-ripples-example
    nav.wrap
      button.wave Wave
      button.ripple Ripple
      button.slow-ripple Slow ripple
      button.fast-ripple Fast ripple
      button.chip.wave Wave
      button.chip.ripple Ripple
      button.chip.slow-ripple Slow ripple
      button.chip.fast-ripple Fast ripple
</template>
<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
