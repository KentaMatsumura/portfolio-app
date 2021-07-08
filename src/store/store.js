/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    status: false
  },
  getters: {
    user: state => state.user,
    status: state => state.status
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; //firebaseが返したユーザー情報
    },
    onUserStatusChanged(state, status) {
      state.status = status; //ログインしてるかどうか true or false
    }
  },
  actions: {
    onAuthStateChanged(context, user) {
      context.commit('onAuthStateChanged', user);
    },
    onUserStatusChanged(context, user) {
      context.commit('onUserStatusChanged', user.uid ? true : false);
    }
  }
});

export default store;
