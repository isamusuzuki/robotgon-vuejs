import { useStore } from 'vuex'
import { key } from '../store/index'

export default () => {
    const store = useStore(key)

    const fake = () => {
        store.commit('openLoading')
        setTimeout(() => {
            store.commit('openModal', {
                icon:
                    '<span class="icon has-text-success">' +
                    '<i class="fas fa-check-circle"></i></span>',
                title: '成功',
                body: 'やったね！',
            })
            store.commit('closeLoading')
        }, 3000)
    }

    return {
        fake,
    }
}
