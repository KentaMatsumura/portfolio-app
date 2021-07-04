<template>
  <b-button variant="primary" v-on:click="doLogin"
    >Sign in with Google</b-button
  >
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';
import Firebase from '../../firebase.js';

export default defineComponent({
  name: 'LoginButton',
  created: function () {
    Firebase.onAuth();
  },
  methods: {
    sleep: function () {
      var startMsec = new Date();

      // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
      while (new Date() - startMsec < 5000);
    },
    doLogin: function () {
      Firebase.login();
    },
  },
});
</script>

<style scoped>
</style>
