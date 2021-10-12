<template>
    <div class="box">
        <div class="title is-size-4">refを同時利用するカウンター２つ</div>
        <div class="columns">
            <div class="column is-3">
                <counter-1></counter-1>
            </div>
            <div class="column is-3">
                <counter-1></counter-1>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="title is-size-4">vuexを同時利用するカウンター２つ</div>
        <div class="columns">
            <div class="column is-3">
                <counter-2></counter-2>
            </div>
            <div class="column is-3">
                <counter-2></counter-2>
            </div>
        </div>
    </div>
    <fake-button></fake-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter1 from '../components/Counter1.vue'
import Counter2 from '../components/Counter2.vue'
import FakeButton from '../components/FakeButton.vue'

export default defineComponent({
    components: {
        Counter1,
        Counter2,
        FakeButton
    },
})
</script>
