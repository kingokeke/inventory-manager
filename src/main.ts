import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/styles/lux.min.css'

createApp(App)
  .use(router)
  .mount('#app');
