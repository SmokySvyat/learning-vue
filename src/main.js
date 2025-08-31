import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'

const app = createApp(App)


// регистрация массива кастомных компонентов
components.forEach(component => {
    app.component(component.name, component)
})

app.use(router)

app.mount('#app')
