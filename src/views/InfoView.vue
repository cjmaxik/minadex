<template>
  <div>
    <minadex-entry :minasona="dex[id - 1]"></minadex-entry>

    <div class="switch">
      <div class="button-group">
        <button @click="changeMinasona(false)">Prev</button>
        {{ id }}/{{ dex.length }}
        <button @click="changeMinasona(true)">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

import MinadexEntry from '@/components/MinadexEntry.vue'
import dex from '@/assets/minasonas/dex.json'

const props = defineProps({
  id: Number
})

onMounted(() => {
  if (outOfBounds(props.id)) router.push('/minadex/1')
})

const changeMinasona = (next) => {
  var next_id = next ? props.id + 1 : props.id - 1

  if (outOfBounds(next_id)) {
    router.push('/minadex/1')
  } else {
    router.push({ name: 'minadex', params: { id: next_id } })
  }
}

const outOfBounds = (id) => id > dex.length || id < 1
</script>
