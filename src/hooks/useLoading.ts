import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index'

export const useLoading = () => {
    const store = useStore(key)
    const loadingActive = computed(() => store.state.loadingActive)
    const openLoading = () => {store.commit('openLoading')}
    const closeLoading = () => {store.commit('closeLoading')}

    return {
        loadingActive,
        openLoading,
        closeLoading
    }
}