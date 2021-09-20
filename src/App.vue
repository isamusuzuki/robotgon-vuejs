<template>
    <section class="section">
        <div class="container">
            <h1 class="title block">Avocado</h1>
            <fake-button></fake-button>
            <loading></loading>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FakeButton from './components/FakeButton.vue'
import Loading from './components/Loading.vue'

export default defineComponent({
    components: { FakeButton, Loading }
})
</script>
