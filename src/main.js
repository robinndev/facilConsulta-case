import { createApp } from 'vue';
// import VueMask from 'v-mask';
import BootstrapVue3 from 'bootstrap-vue-3';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// JA ESTA COM VEE VALIDATE
createApp(App).use(store).use(router).use(BootstrapVue3)
  .use(Vuelidate)
  // .use(VueMask)
  .mount('#app');
