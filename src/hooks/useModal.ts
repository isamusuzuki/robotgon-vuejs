import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index'

export const useModal = () => {
    const store = useStore(key)

    const is_active = computed(() => store.state.modalActive)
    const icon = computed(() => store.state.modalPack.icon)
    const title = computed(() => store.state.modalPack.title)
    const body = computed(() => store.state.modalPack.body)
    const close = () => {
        store.commit('closeModal')
    }

    return {
        is_active,
        icon,
        title,
        body,
        close,
    }
}
