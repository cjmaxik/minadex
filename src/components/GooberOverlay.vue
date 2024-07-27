<template>
  <div class="flex-container">
    <div class="row">
      <minadex-panel class="minasona-help flex-item" />

      <button class="button flex-item" @click="router.push('/e/1')">Open Minadex</button>
    </div>

    <img src="/assets/goober-here.png" alt="" />

    <div class="preload" v-show="false">
      <div v-for="minasona in dex" v-bind:key="minasona.nickname">
        <img :src="`/assets/emotes/${minasona.emote || 'cerber127Huh.webp'}`">
        <img :src="`/assets/minasonas/${minasona.image}`">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

import MinadexPanel from '../components/MinadexPanel.vue'
import dex from '@/assets/dex.json'
</script>

<style lang="scss" scoped>
.flex-container {
  z-index: 1000;
  overflow: hidden !important;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: rgb(0, 0, 0, 80%);
}

.row {
  width: auto;
  text-align: center;
}

.flex-item {
  margin-left: 5vw;
  padding: 5px;
}

.button {
  padding: 0 50px;
  text-align: center;
  font-size: 60px !important;
  height: 150px !important;
  animation: panels-animation 15s both infinite;
}

img {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 50%;
  height: auto;
}
</style>
