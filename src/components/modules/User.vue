<template>
  <div class="user" v-if="true">
    <p class="displayName">Guest</p>
    <b-button variant="secondary"> Sign out </b-button>
  </div>
  <div class="user" v-else>
    <LoginButton />
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';

import LoginButton from '@/components/modules/LoginButton.vue';

export default defineComponent({
  name: 'User',
  components: {
    LoginButton,
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
