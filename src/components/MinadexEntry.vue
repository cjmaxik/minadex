<template>
  <div class="emote">
    <div class="background"></div>
    <img :src="minasona.emote" alt="Emote" loading="lazy" />
  </div>

  <div class="panels">
    <minadex-panel class="minadex-bio">
      {{ minasona.quote }}
    </minadex-panel>
  </div>

  <div class="showcase-background">
    <img class="bg" src="@/assets/bg.svg" alt="">

    <div class="minasona">
      <h1>{{ minasona.nickname }}</h1>

      <img :src="minasona.image" alt="Minasona Image" loading="lazy" />
    </div>
  </div>

</template>

<script setup>
import MinadexPanel from '../components/MinadexPanel.vue'

defineProps({
  minasona: Object
})
</script>
