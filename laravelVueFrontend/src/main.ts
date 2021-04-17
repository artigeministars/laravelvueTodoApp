import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import {router} from '@/routes';

const app = createApp(App).use(store).use(router).mount('#app')
// app.use(VueAxios, axios);

export default app;