import { computed } from 'vue'
import { useStore } from 'vuex'
import { key, IModalPack } from '../store/index'

export const useModal = () => {
    const store = useStore(key)
    const modalActive = computed(() => store.state.modalActive)
    const modalIcon = computed(() => store.state.modalPack.icon)
    const modalTitle = computed(() => store.state.modalPack.title) 
    const modalBody = computed(() => store.state.modalPack.body)
    const openModal = (modalPack: IModalPack) => {
        store.commit('openModal', modalPack)
    }
    const closeModal = () => {store.commit('closeModal')}

    return {
        modalActive,
        modalIcon,
        modalTitle,
        modalBody,
        openModal,
        closeModal
    }
}