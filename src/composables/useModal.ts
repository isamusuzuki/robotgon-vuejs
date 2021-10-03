import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index'

export default () => {
    const store = useStore(key)

    const isActive = computed(() => store.state.modalActive)
    const icon = computed(() => store.state.modalPack.icon)
    const title = computed(() => store.state.modalPack.title)
    const body = computed(() => store.state.modalPack.body)
    const close = () => {
        store.commit('closeModal')
    }

    return {
        isActive,
        icon,
        title,
        body,
        close,
    }
}
