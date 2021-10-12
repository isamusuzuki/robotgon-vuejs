<template>
    <div class="block">
        <copy-2-parent target="男の子" @childEvent="setKeyword"></copy-2-parent>
        &nbsp;
        <copy-2-parent target="女の子" @childEvent="setKeyword"></copy-2-parent>
    </div>
    <div class="block">
        <div class="field">
            <div class="label">
                <input
                    class="input"
                    type="text"
                    placeholder="入力不可、選択のみ可"
                    disabled="disabled"
                    v-model="keyword"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Copy2Parent from './Copy2Parent.vue'

export default defineComponent({
    components: {
        Copy2Parent,
    },
    setup() {
        const keyword = ref('')

        const setKeyword = (word: string) => {
            keyword.value = word
        }

        return {
            keyword,
            setKeyword,
        }
    },
})
</script>
