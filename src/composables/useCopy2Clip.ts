import { ref } from 'vue'
import useClipboard from 'vue-clipboard3'

export default (target: string) => {
    const showCopy = ref(false)
    const { toClipboard } = useClipboard()

    const copy = async () => {
        try {
            await toClipboard(target)
            showCopy.value = true
            setTimeout(() => {
                showCopy.value = false
            }, 300)
        } catch (e) {
            console.error(e)
        }
    }

    return {
        showCopy,
        copy,
    }
}
