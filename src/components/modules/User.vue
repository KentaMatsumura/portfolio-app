<template>
  <!-- <div class="user" v-if="user.isLogin"> -->
  <div class="user" v-if="status">
    <!-- <p class="displayName">{{ user.name }}</p> -->
    <b-button variant="secondary" v-on:click="doLogout"> Sign out </b-button>
  </div>
  <div class="user" v-else>
    <LoginButton />
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';

import LoginButton from '@/components/modules/LoginButton.vue';
import Firebase from '../../firebase.js';

export default defineComponent({
  name: 'User',
  created: function () {
    Firebase.onAuth();
  },
  components: {
    LoginButton,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    status() {
      return this.$store.getters.status;
    },
  },
  methods: {
    doLogout: function () {
      // firebase.auth().signOut();
      Firebase.logout();
    },
  },
});
</script>

<style scoped>
.user {
  margin-left: auto;
  height: 50px;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
}
.displayName,
button {
  white-space: nowrap;
}
.displayName {
  margin: 0 20px 0 10px;
}
button {
  font-weight: 600;
}
.photoURL {
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
}

p {
  color: white;
}
</style>
