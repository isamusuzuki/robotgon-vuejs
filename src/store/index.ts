import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// ストアのステートに対して型を定義する
export interface IModalPack {
    icon: string
    title: string
    body: string
}

export interface State {
    count: number
    loadingActive: boolean
    modalActive: boolean
    modalPack: IModalPack
}

// インジェクションキーを定義する
export const key: InjectionKey<Store<State>> = Symbol()

// ストアを生成する
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
