<template>
    <div class="box">
        <!-- <h1 class="title has-text-grey-light">{{ titlename }}</h1>
        <h2 class="subtitle is-size-6 has-text-grey-light">
            {{ subtitlename }}
        </h2> -->
        <div class="field mt-4">
            <button class="button is-primary" @click="testLoading">
                クリック
            </button>
        </div> 
        <!-- <div class="field">
            <div class="file has-name">
                <label class="file-label">
                    <input
                        class="file-input"
                        type="file"
                        name="file"
                        disabled="disabled"
                    />
                    <span class="file-cta">
                        <span class="file-label has-text-grey-light">
                            ファイルを選択
                        </span>
                    </span>
                    <span class="file-name" style="width: 300px"> </span>
                </label>
            </div>
        </div>
        <div class="field mt-4">
            <button class="button is-primary" disabled="disabled">
                {{ buttonname }}
            </button>
        </div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLoading } from '../hooks/useLoading'

export default defineComponent({
    // props: {
    //     titlename: String,
    //     subtitlename: String,
    //     buttonname: String,
    // },
    setup() {
        return {
            ...useLoading()
        }
    }
})
</script>