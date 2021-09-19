<template>
    <h1>Avocado</h1>
    <h2>{{ programVersion }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App',
    data() {
        return {
            programVersion: 'v0000 開発中',
        }
    },
})
</script>
