<template>
    <h1>Avocado</h1>
    <div>
        <button @click="decrement">-</button>&nbsp;
        <span v-text="count" />&nbsp;
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCount } from './hooks/useCount'
export default defineComponent({
    name: 'App',
    setup() {
        return {
            ...useCount()
        }
    }
})
</script>
