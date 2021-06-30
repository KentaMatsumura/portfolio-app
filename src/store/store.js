/* eslint-disable */
import { reactive } from '@vue/composition-api';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {},
  state: {},
  mutations: {},
  actions: {}
});
