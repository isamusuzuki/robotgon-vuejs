import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// ストアのステートに対して型を定義する
export interface State {
    count: number
}

// インジェクションキーを定義する
export const key: InjectionKey<Store<State>> = Symbol()

// ストアを生成する
export const store = createStore<State>({
    state: {
        count: 0,
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
    }
})
