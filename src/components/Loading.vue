<template>
    <div class="modal" v-bind:class="{ 'is-active': active }">
        <div
            class="modal-background"
            style="background-color: rgba(10, 10, 10, 0.6)"
        ></div>
        <div class="modal-content has-text-centered" style="height: 80px">
            <span class="icon is-large has-text-light">
                <i class="fa fa-spinner fa-pulse fa-3x"></i>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLoading } from '../hooks/useLoading'

export default defineComponent({
    setup() {
        return {
            ...useLoading(),
        }
    },
})
</script>
