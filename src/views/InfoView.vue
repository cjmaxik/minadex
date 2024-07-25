<template>
  <div>
    <minadex-entry :minasona="dex[id]"></minadex-entry>

    <div class="switch">
      <div class="button-group">
        <button @click="changeMinasona(false)">&#8592;</button>
        Change minasona ({{ id + 1 }}/{{ dex.length }})
        <button @click="changeMinasona(true)">&#8594;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MinadexEntry from '@/components/MinadexEntry.vue'

import dex from '@/assets/minasonas/json/dex.json'

const id = ref(0)
const changeMinasona = (increment = true) => {
  id.value = Math.max(0, increment ? id.value + 1 : id.value - 1)

  if (id.value >= dex.length) {
    id.value = 0
  }
}

</script>
