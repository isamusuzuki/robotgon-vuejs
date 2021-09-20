import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'

const app = createApp(App)

// キーをVue Appインスタンスに渡す
app.use(store, key)

app.mount('#app')
