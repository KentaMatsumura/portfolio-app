// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import App from './App';
import store from './store/store.js';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDDEQ1MH0nmmCyRPU7qzMAMKc3cvAhzH0',
  authDomain: 'portfolio-app-b2ffd.firebaseapp.com',
  projectId: 'portfolio-app-b2ffd',
  storageBucket: 'portfolio-app-b2ffd.appspot.com',
  messagingSenderId: '862875188534',
  appId: '1:862875188534:web:bcf90dc5b21cc35db0c797',
  measurementId: 'G-98FQHLQG37'
};

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
