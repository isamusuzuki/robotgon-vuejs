<template>
    <section class="section">
        <div class="container">
            <h1 class="title block">Avocado</h1>
            <nav class="level">
                <div class="level-left">
                    <button class="level-item button is-outlined" @click="decrement">-</button>
                    <span class="level-item is-size-3" v-text="count" />
                    <button class="level-item button is-outlined" @click="increment">+</button>
                </div>
            </nav>
            <counter></counter>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from './components/Counter.vue'
import { useCount } from './hooks/useCount'
export default defineComponent({
    components: { Counter },
    setup() {
        return {
            ...useCount()
        }
    }
})
</script>
