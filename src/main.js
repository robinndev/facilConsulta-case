import { createApp } from 'vue';
// import VueMask from 'v-mask';
import VueConfetti from 'vue-confetti';
import BootstrapVue3 from 'bootstrap-vue-3';
import Vuelidate from 'vuelidate';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'sweetalert2/dist/sweetalert2.min.css';
// JA ESTA COM VEE VALIDATE
createApp(App).use(store).use(router).use(BootstrapVue3)
  .use(Vuelidate)
  .use(VueConfetti)
  .use(VueSweetalert2)
  // .use(VueMask)
  .mount('#app');
