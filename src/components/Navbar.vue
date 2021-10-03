<template>
    <nav class="navbar is-fixed-top">
        <div class="navbar-brand">
            <div class="navbar-item">
                <div class="tabs">
                    <ul>
                        <li v-bind:class="{ 'is-active': isActive1 }">
                            <router-link to="/first">First</router-link>
                        </li>
                        <li v-bind:class="{ 'is-active': isActive2 }">
                            <router-link to="/second">Second</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useNavbar from '../composables/useNavbar'

export default defineComponent({
    setup() {
        return {
            ...useNavbar()
        }
    },
})
</script>
