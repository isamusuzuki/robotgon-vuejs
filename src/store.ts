import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// ストアのステートに対して型を定義する
export interface State {
    count: number,
    loadingActive: boolean
}

// インジェクションキーを定義する
export const key: InjectionKey<Store<State>> = Symbol()

// ストアを生成する
export const store = createStore<State>({
    state: {
        count: 0,
        loadingActive: false
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
        testLoading(state) {
            state.loadingActive = true
            setTimeout(() => {
                state.loadingActive = false
            }, 3000)
        }
    }
})
