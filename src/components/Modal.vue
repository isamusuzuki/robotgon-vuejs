<template>
    <div class="modal" v-bind:class="{ 'is-active': modalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <span v-html="modalIcon"></span>
                    <span v-text="modalTitle"></span>
                </p>
                <button
                    aria-label="close"
                    class="delete"
                    v-on:click="closeModal"
                ></button>
            </header>
            <section class="modal-card-body">
                <span v-text="modalBody"></span>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useModal } from '../hooks/useModal'

export default defineComponent({
    setup() {
        return {
            ...useModal(),
        }
    }
})
</script>