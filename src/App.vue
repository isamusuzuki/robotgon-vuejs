<template>
    <section class="section">
        <div class="container">
            <tango-cho></tango-cho>
            <keyword-input></keyword-input>
            <keyword-output></keyword-output>
            <fake-button></fake-button>
            <counter></counter>
            <loading></loading>
            <modal></modal>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from './components/Counter.vue'
import FakeButton from './components/FakeButton.vue'
import KeywordInput from './components/KeywordInput.vue'
import KeywordOutput from './components/KeywordOutput.vue'
import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'
import TangoCho from './components/TangoCho.vue'

export default defineComponent({
    components: {
        Counter,
        FakeButton,
        KeywordInput,
        KeywordOutput,
        Loading,
        Modal,
        TangoCho,
    },
})
</script>
