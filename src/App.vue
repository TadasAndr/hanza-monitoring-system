<template>
  <div :class="{ gridView: !isSidebarCollapsed, fullscreenView: isSidebarCollapsed}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
    isSidebarCollapsed() {
      return this.$store.state.isSidebarCollapsed;
    }
  }
}
</script>

<style>
:root {
  /* main Hanza colors */
  --hanza-violet: rgb(60, 16, 86);
  --hanza-green: rgb(75, 169, 138);
  --hanza-yellow: rgb(222, 173, 104);
  --hanza-gray: rgb(202, 199, 199);
  --hanza-light-gray: rgb(242, 243, 244);
  
  /* secondary Hanza colors */
  --hanza-blue: rgb(69, 101, 173);
  --hanza-red: rgb(233, 33, 86);
  --hanza-light-blue: rgb(99, 195, 209);
  --hanza-orange: rgb(235, 91, 37);
  --hanza-dark-blue: rgb(26, 43, 76);
}

.gridView {
  display: grid;
  grid-template-columns: 250px 1fr; 
  grid-gap: 0px;
}

.fullscreenView {
  display: grid;
  grid-template-columns: 0px 1fr; 
  grid-gap: 0px;
}

body {
  overflow: hidden;
}
</style>
