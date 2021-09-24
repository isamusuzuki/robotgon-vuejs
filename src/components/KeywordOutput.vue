<template>
    <h1 class="title block">{{ keyword }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useKeyword } from '../hooks/useKeyword'

export default defineComponent({
    setup() {
        return {
            ...useKeyword(),
        }
    },
})
</script>
