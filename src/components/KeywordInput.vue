<template>
    <div class="field">
        <label class="label">キーワード</label>
        <div class="control">
            <input
                class="input"
                type="text"
                placeholder="キーワードの入力"
                v-model="keyword"
            />
        </div>
    </div>
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
