<template>
    <keyword-input></keyword-input>
    <keyword-output></keyword-output>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KeywordInput from '../components/KeywordInput.vue'
import KeywordOutput from '../components/KeywordOutput.vue'

export default defineComponent({
    components: {
        KeywordInput,
        KeywordOutput,
    },
})
</script>