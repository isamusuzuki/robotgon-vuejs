<template>
    <span
        style="text-decoration: underline; cursor: pointer"
        @click="copy"
        v-text="target"
    ></span>
    <span v-if="showCopy">copy</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCopy2Clip from '../composables/useCopy2Clip'

export default defineComponent({
    props: {
        target: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return {
            ...useCopy2Clip(props.target),
        }
    },
})
</script>
