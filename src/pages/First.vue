<template>
    <div class="title">refを利用したカウンター２つ</div>
    <div class="columns">
        <div class="column is-2">
            <counter-1></counter-1>
        </div>
        <div class="column is-2">
            <counter-1></counter-1>
        </div>
    </div>
    <div class="title">vuexを利用したカウンター２つ</div>
    <div class="columns">
        <div class="column is-2">
            <counter-2></counter-2>
        </div>
        <div class="column is-2">
            <counter-2></counter-2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter1 from '../components/Counter1.vue'
import Counter2 from '../components/Counter2.vue'

export default defineComponent({
    components: {
        Counter1,
        Counter2,
    },
})
</script>
