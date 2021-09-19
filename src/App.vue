<template>
    <section class="section">
        <div class="container">
            <h1 class="title block">Avocado</h1>
            <counter></counter>
            <counter></counter>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from './components/Counter.vue'
export default defineComponent({
    components: { Counter },
})
</script>
