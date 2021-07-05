<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Hobby" right>
          <b-dropdown-item href="/comicList">ComicList</b-dropdown-item>
          <b-dropdown-item href="/musicList">MusicList</b-dropdown-item>
          <b-dropdown-item href="/movieList">MovieList</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-container class="d-flex justify-content-end">
        <User />
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';

import User from '@/components/modules/User.vue';

export default defineComponent({
  name: 'Header',
  components: {
    User,
  },
});
</script>


<style scoped>
</style>
