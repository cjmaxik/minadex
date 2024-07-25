<template>
  <div class="overlay">
    <div class="center">
      <minadex-panel>
        For better experience,<br />open this page in fullscreen mode (hit F11)
      </minadex-panel>

      <button @click="this.$router.push('/minadex')">Open Minadex</button>
    </div>
    <img src="/assets/goober-here.png" alt="" />
  </div>
</template>

<script setup>
import MinadexPanel from '../components/MinadexPanel.vue'
</script>

<style lang="scss" scoped>
.overlay {
  z-index: 1000;
  overflow: hidden !important;

  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 50%);

  display: flex;
  justify-content: center;
  align-items: center;

  .center {
    position: absolute;
    text-align: center;

    button {
      margin-top: 50px;
      font-size: 60px;
      height: 150px;
    }
  }

  img {
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 30%;
    height: auto;
  }
}
</style>
