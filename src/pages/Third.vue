<template>
    <div class="box">
        <h1 class="title is-size-5">emitを使って子から親に通知する</h1>
        <word-picker></word-picker>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WordPicker from '../components/WordPicker.vue'

export default defineComponent({
    components: {
        WordPicker
    },
})
</script>
