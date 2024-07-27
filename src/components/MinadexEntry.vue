<template>
  <div class="emote-background">
    <div class="emote">
      <div class="background"></div>
      <img :src="`/assets/emotes/${minasona.emote || 'cerber127Huh.webp'}`" alt="Emote" />
    </div>
  </div>

  <div class="panels">
    <minadex-panel class="minadex-bio" :text="minasona.quote" :caption="minasona.caption" />
  </div>

  <div class="showcase-background">
    <img class="bg" src="@/assets/bg.svg" alt="">

    <div class="minasona">
      <h1>{{ minasona.nickname }}</h1>

      <img :src="`/assets/minasonas/${minasona.image}`" alt="Minasona Image" />
    </div>
  </div>

</template>

<script setup>
import MinadexPanel from '../components/MinadexPanel.vue'

defineProps({
  minasona: Object
})
</script>
