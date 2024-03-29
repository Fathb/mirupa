import {
  createApp
} from 'vue';
import VueSwal from "vue-sweetalert2";
import App from './App.vue';
import router from './router';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert2/dist/sweetalert2.min.css';


import {
  auth
} from './firebase.js';

import './registerServiceWorker'


let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).use(VueSwal).mount('#app');
  }
});