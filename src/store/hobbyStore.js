/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hobbies: {}
  },
  getters: {
    user: hobbies => hobbies.user
  },
  mutations: {
    onHobbiesChanged(hobbies) {
      state.hobbies = hobbies; //firebaseが返したユーザー情報
    }
  },
  actions: {
    onHobbiesChanged(context, hobbies) {
      context.commit('onHobbiesChanged', hobbies);
    }
  }
});
