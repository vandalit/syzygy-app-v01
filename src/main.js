import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./firebase"; // Asegúrate de que se cargue y se inicialice Firebase


createApp(App).use(store).use(router).mount('#app')

