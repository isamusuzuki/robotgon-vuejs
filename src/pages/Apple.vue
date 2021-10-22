<template>
    <div class="box">
        <div class="title is-size-4">refを同時利用するカウンター２つ</div>
        <div class="columns">
            <div class="column is-3">
                <counter-1></counter-1>
            </div>
            <div class="column is-3">
                <counter-1></counter-1>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="title is-size-4">vuexを同時利用するカウンター２つ</div>
        <div class="columns">
            <div class="column is-3">
                <counter-2></counter-2>
            </div>
            <div class="column is-3">
                <counter-2></counter-2>
            </div>
        </div>
    </div>
    <div class="box">
        <h1 class="title is-size-5">vuexの値を双方向バインドする</h1>
        <keyword-input></keyword-input>
        <keyword-output></keyword-output>
    </div>

    <div class="box">
        <h1 class="title">送信ボタンデモ</h1>
        <h2 class="subtitle is-size-6">実際にはどこにもアクセスしてません</h2>
        <fake-button></fake-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter1 from '../components/Counter1.vue'
import Counter2 from '../components/Counter2.vue'
import FakeButton from '../components/FakeButton.vue'
import KeywordInput from '../components/KeywordInput.vue'
import KeywordOutput from '../components/KeywordOutput.vue'

export default defineComponent({
    components: {
        Counter1,
        Counter2,
        FakeButton,
        KeywordInput,
        KeywordOutput,
    },
})
</script>
