import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default () => {
    const route = useRoute()
    const isActive1 = computed(() => route.name === '1')
    const isActive2 = computed(() => route.name === '2')

    return {
        isActive1,
        isActive2
    }
}