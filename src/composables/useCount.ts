import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index'

export default () => {
    const store = useStore(key)

    const count = computed(() => store.state.count)
    const increment = () => {
        store.commit('increment')
    }
    const decrement = () => {
        store.commit('decrement')
    }

    return {
        count,
        increment,
        decrement,
    }
}
