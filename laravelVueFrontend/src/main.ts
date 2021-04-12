import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'


const app = createApp(App).use(store).mount('#app')
// app.use(VueAxios, axios);
// .use(VueAxios, axios)
 export default app;