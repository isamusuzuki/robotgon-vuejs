<template>
    <nav class="level">
        <div class="level-left">
            <button class="level-item button is-outlined" @click="decrement">
                -
            </button>
            <span class="level-item is-size-3" v-text="count" />
            <button class="level-item button is-outlined" @click="increment">
                +
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCounter1 from '../composables/useCounter1'

export default defineComponent({
    setup() {
        return {
            ...useCounter1(),
        }
    },
})
</script>
