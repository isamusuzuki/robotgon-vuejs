<template>
    <navbar></navbar>
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
import Navbar from './components/Navbar.vue'

export default defineComponent({
    components: {
        Loading,
        Modal,
        Navbar,
    },
})
</script>
