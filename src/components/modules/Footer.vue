<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="bottom">
      <b-navbar-nav>
        <b-nav-item @click="returnTop">Page Top</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    returnTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
</script>

<style scoped>

</style>
