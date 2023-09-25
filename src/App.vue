<template>
  <div>
    <base-sidebar></base-sidebar>
  </div>
</template>

<script>
import BaseSidebar from './components/sidebar/BaseSidebar.vue';
export default {
  name: 'App',
  components: {
    BaseSidebar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
