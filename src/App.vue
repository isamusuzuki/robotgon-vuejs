<template>
    <section class="section">
        <div class="container">
            <h1 class="title block">Avocado</h1>
            <fake-button></fake-button>
            <loading></loading>
            <modal></modal>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FakeButton from './components/FakeButton.vue'
import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'

export default defineComponent({
    components: { FakeButton, Loading, Modal }
})
</script>
