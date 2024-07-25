<template>
  <div class="minadex-panel">
    <div class="emote" v-show="emote">
      <div class="background"></div>
      <img :src="emote" alt="Emote" />
    </div>

    <div class="handle">
      <div class="elements">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>

        <div class="angle"></div>
      </div>
    </div>

    <div class="body">
      <div class="title" v-show="title">
        {{ title }}
      </div>

      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  emote: String
})
</script>
