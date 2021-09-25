import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index'

export const useKeyword = () => {
    const store = useStore(key)

    const keyword = computed({
        get: () => store.state.keyword,
        set: (val: string) => store.commit('setKeyword', val),
    })

    return {
        keyword,
    }
}
