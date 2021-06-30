<template>
  <div>
    Home
    <br />
    <h1>Hello, {{ guest }}</h1>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    const guest = 'Guest';
    return { guest };
  },
});
</script>


<style>
</style>
