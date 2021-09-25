import { computed, toRef } from 'vue'
import { reactive } from 'vue'

interface IWord {
    japanese: String
    english: String
}

interface State {
    newJapanese: String
    newEnglish: String
    words: Array<IWord>
}

export const useTangoCho = () => {
    const state = reactive<State>({
        newJapanese: '',
        newEnglish: '',
        words: [
            {
                japanese: 'コアラ',
                english: 'Koala',
            },
            {
                japanese: 'ラッコ',
                english: 'Sea Otter',
            },
        ],
    })
    const newJapanese = toRef(state, 'newJapanese')
    const newEnglish = toRef(state, 'newEnglish')
    const buttonDisabled = computed(
        () => newJapanese.value === '' || newEnglish.value === '')
    const addNewWord = () => {
        state.words.push({
            japanese: state.newJapanese, 
            english: state.newEnglish
        })
        state.newJapanese = ''
        state.newEnglish = ''
    }
    const words = computed(() => state.words)

    return {
        newJapanese,
        newEnglish,
        buttonDisabled,
        addNewWord,
        words,
    }
}
