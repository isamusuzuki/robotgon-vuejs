<template>
    <div class="field mt-4">
        <button class="button is-primary" @click="fake">クリック</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFakeButton from '../composables/useFakeButton'

export default defineComponent({
    setup() {
        return {
            ...useFakeButton(),
        }
    },
})
</script>
