<template>
  <div class="minadex-panel">
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
        <span v-show="text">
          {{ text }}
        </span>
        <span v-show="!text">
          <p>Put yourself to the right, and chat to the left.</p>
          <br />
          <p>For better experience,<br />open this page in fullscreen mode (hit F11).</p>
        </span>

        <div class="caption" v-show="caption">
          {{ caption }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  caption: String
})
</script>
