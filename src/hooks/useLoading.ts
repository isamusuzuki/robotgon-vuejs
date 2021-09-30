import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index'

export const useLoading = () => {
    const store = useStore(key)

    const is_active = computed(() => store.state.loadingActive)

    return {
        is_active,
    }
}
