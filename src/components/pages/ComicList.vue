<template>
  <div>
    Comic
    <br />
    <button class="btn btn-primary" v-on:click="testClick">test</button>
    <b-container>
      <b-row align-h="center">
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
        <b-col cols="3"> <Card /> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';
import Card from '../modules/Card.vue';

export default defineComponent({
  setup() {},
  components: {
    Card,
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
    testClick: function () {
      alert(this.status ? this.user.displayName : 'Guest');
    },
  },
});
</script>


<style>
</style>
