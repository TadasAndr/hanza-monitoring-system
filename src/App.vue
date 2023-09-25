<template>
    <base-sidebar></base-sidebar>

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
  display: grid;
  grid-template-columns: 250px 1fr; 
  grid-gap: 0px;
}

</style>
