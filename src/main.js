import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// notifications
import Notifications from '@kyvg/vue3-notification'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
    .use(router)
    .use(store)
    .use(Notifications)
    .mount('#app')