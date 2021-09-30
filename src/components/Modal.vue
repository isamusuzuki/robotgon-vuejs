<template>
    <div class="modal" v-bind:class="{ 'is-active': is_active }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <span v-html="icon"></span>
                    <span v-text="title"></span>
                </p>
                <button
                    aria-label="close"
                    class="delete"
                    v-on:click="close"
                ></button>
            </header>
            <section class="modal-card-body">
                <span v-text="body"></span>
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
    },
})
</script>
