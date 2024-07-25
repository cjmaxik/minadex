<template>
    <div class="panels">
        <minadex-panel class="minadex-info">{{ minasona.bio }}</minadex-panel>

        <minadex-panel class="minadex-bio" :title="minasona.nickname" :emote="minasona.emote">
            <div class="alias">Alias: {{ minasona.alias ?? 'NEEDS ALIAS' }}</div>

            <div class="number">#{{ minasona.number ?? 'NEEDS NUMBER' }}</div>

            <div class="likes">
                Likes:
                <p>{{ minasona.likes ?? 'NEEDS LIKES' }}</p>
            </div>

            <div class="dislikes">
                Dislikes:
                <p>{{ minasona.dislikes ?? 'NEEDS DISLIKES' }}</p>
            </div>
        </minadex-panel>
    </div>

    <div class="showcase">
        <div class="inner"></div>
    </div>

    <div class="minasona">
        <img :src="minasona.image[formId]" alt="Minasona Image" />
        <div class="button-group">
            <button @click="changeForm(false)">&#8592;</button>
            Change form ({{ formId + 1 }}/{{ minasona.image.length }})
            <button @click="changeForm(true)">&#8594;</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MinadexPanel from '../components/MinadexPanel.vue'

defineProps({
    minasona: Object
})

const formId = ref(0)
const changeForm = (increment = true) => {
    formId.value = Math.max(0, increment ? formId.value + 1 : formId.value - 1)

    if (formId.value >= this.minasona.image[formId].image.length) {
        formId.value = 0
    }
}
</script>