import {
 createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.css';
import {
 auth
} from './firebase.js';


let app;
auth.onAuthStateChanged(() => {
 if (!app) {
  app = createApp(App).use(store).use(router).mount('#app');
 }
});