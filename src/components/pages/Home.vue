<template>
  <div>
    Home
    <br />
    <h1>Hello, {{ this.status ? this.user.displayName : 'Guest' }}</h1>
    <br />
    <br />
    <b-button variant="primary" v-on:click="testClick">test</b-button>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  computed: {
    user() {
      return this.$store.getters.user;
    },
    status() {
      return this.$store.getters.status;
    },
  },
  methods: {
    testClick: function () {
      alert(this.status ? this.user.displayName : 'Guest');
    },
  },
});
</script>


<style>
</style>
