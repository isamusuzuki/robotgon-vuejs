<template>
    <div class="box">
        <h1 class="title is-size-5">refとreactiveを使いこなす</h1>
        <tango-chou></tango-chou>
    </div>
    <div class="box">
        <h1 class="title is-size-5">VueClipboard3を使いこなす</h1>
        <lyric-clipper></lyric-clipper>
    </div>
    <div class="box">
        <h1 class="title is-size-5">emitを使って子から親に通知する</h1>
        <word-picker></word-picker>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LyricClipper from '../components/LyricClipper.vue'
import TangoChou from '../components/TangoCho.vue'
import WordPicker from '../components/WordPicker.vue'

export default defineComponent({
    components: {
        LyricClipper,
        TangoChou,
        WordPicker,
    },
})
</script>
