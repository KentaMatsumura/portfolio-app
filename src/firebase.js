/* eslint-disable */
import firebase from '@firebase/app';
import '@firebase/auth';
import store from './store/store';

const config = {
  apiKey: 'AIzaSyCDDEQ1MH0nmmCyRPU7qzMAMKc3cvAhzH0',
  authDomain: 'portfolio-app-b2ffd.firebaseapp.com',
  projectId: 'portfolio-app-b2ffd',
  storageBucket: 'portfolio-app-b2ffd.appspot.com',
  messagingSenderId: '862875188534',
  appId: '1:862875188534:web:bcf90dc5b21cc35db0c797',
  measurementId: 'G-98FQHLQG37'
};

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  logout() {
    firebase.auth().signOut();
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.dispatch('onAuthStateChanged', user);
      store.dispatch('onUserStatusChanged', user);
    });
  }
};
