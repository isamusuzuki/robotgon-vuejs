<template>
    <section class="section">
        <div class="container">
            <router-link to="/first">Go to Home</router-link>
            <router-link to="/second">Go to Second</router-link>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <router-view></router-view>
        </div>
    </section>
    <loading></loading>
    <modal></modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'

export default defineComponent({
    components: {
        Loading,
        Modal,
    },
})
</script>
