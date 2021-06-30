<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Hobby" right>
          <b-dropdown-item href="/comic">Comic</b-dropdown-item>
          <b-dropdown-item href="/music">Music</b-dropdown-item>
          <b-dropdown-item href="/movie">Movie</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
