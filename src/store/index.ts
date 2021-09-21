import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { IModalPack } from '../typed'

export interface State {
    count: number
    loadingActive: boolean
    modalActive: boolean
    modalPack: IModalPack
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0,
        loadingActive: false,
        modalActive: false,
        modalPack: {icon: '', title: '', body: ''}
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        },
        openLoading(state) {
            state.loadingActive = true
        },
        closeLoading(state) {
            state.loadingActive = false
        },
        openModal(state, modalPack: IModalPack) {
            state.modalPack = modalPack
            state.modalActive = true
        },
        closeModal(state) {
            state.modalPack = {icon: '', title: '', body: ''}
            state.modalActive = false
        }
    }
})
