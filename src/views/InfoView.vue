<template>
  <div>
    <minadex-entry :minasona="dex[id - 1]"></minadex-entry>

    <div class="switch">
      <div class="end" v-if="id === dex.length">
        End of the showcase
      </div>
      <div class="button-group">
        <button @click="changeMinasona(false)">
          {{ id === 1 ? 'Back' : 'Prev' }}
        </button>
        <div class="text">{{ id }}/{{ dex.length }}</div>
        <button @click="changeMinasona(true)">
          {{ id === dex.length ? 'Back' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

import MinadexEntry from '@/components/MinadexEntry.vue'
import dex from '@/assets/dex.json'

const props = defineProps({
  id: Number
})

onMounted(() => {
  if (outOfBounds(props.id)) router.push('/minadex/1')
  document.addEventListener("keyup", handler)
})
onUnmounted(() => document.removeEventListener("keyup", handler));

const handler = (event) => {
  if (event.key === "ArrowLeft") {
    changeMinasona(false)
  } else if (event.key === "ArrowRight") {
    changeMinasona(true)
  }
}

const changeMinasona = (next) => {
  var next_id = next ? props.id + 1 : props.id - 1

  console.log(next_id)

  if (outOfBounds(next_id)) {
    if (next_id <= 0) {
      next_id = dex.length
    } else {
      next_id = 1
    }
  }

  router.push({ name: 'e', params: { id: next_id } })
}

const outOfBounds = (id) => id > dex.length || id < 1
</script>
