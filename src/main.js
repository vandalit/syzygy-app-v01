import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { db } from "../firebase";

console.log("Firestore conectado:", db);


createApp(App).use(store).use(router).mount('#app')

