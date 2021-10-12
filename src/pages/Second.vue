<template>
    <div class="box">
        <h1 class="title is-size-5">vuexの値を双方向バインドする</h1>
        <keyword-input></keyword-input>
        <keyword-output></keyword-output>
    </div>
    <div class="box">
        <h1 class="title is-size-5">refとreactiveを使いこなす</h1>
        <tango-chou></tango-chou>
    </div>
    <div class="box">
        <h1 class="title is-size-5">VueClipboard3を使いこなす</h1>
        <lyric-clipper></lyric-clipper>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KeywordInput from '../components/KeywordInput.vue'
import KeywordOutput from '../components/KeywordOutput.vue'
import LyricClipper from '../components/LyricClipper.vue'
import TangoChou from '../components/TangoCho.vue'

export default defineComponent({
    components: {
        KeywordInput,
        KeywordOutput,
        LyricClipper,
        TangoChou,
    },
})
</script>
