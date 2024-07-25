<template>
  <div class="flex-container">
    <div class="row">
      <minadex-panel class="minasona-help flex-item">
        <p>Put yourself to the right, and chat to the left.</p>
        <br />
        <p>For better experience,<br />open this page in fullscreen mode (hit F11).</p>
      </minadex-panel>

      <button class="button flex-item" @click="router.push('/minadex')">Open Minadex</button>
    </div>

    <img src="/assets/goober-here.png" alt="" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

import MinadexPanel from '../components/MinadexPanel.vue'
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

// .overlay {

//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//

//   .center {
//     position: absolute;
//     text-align: center;
//     width: 100%;
//     height: 100%;

//     button {
//       font-size: 60px;
//       height: 150px;
//     }
//   }

img {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 50%;
  height: auto;
}
</style>
