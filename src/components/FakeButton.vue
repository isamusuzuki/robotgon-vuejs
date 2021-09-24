<template>
    <div class="box">
        <h1 class="title">送信ボタンデモ</h1>
        <h2 class="subtitle is-size-6">実際にはどこにもアクセスしてません</h2>
        <div class="field mt-4">
            <button class="button is-primary" @click="fake">クリック</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFakeButton } from '../hooks/useFakeButton'

export default defineComponent({
    setup() {
        return {
            ...useFakeButton(),
        }
    },
})
</script>
