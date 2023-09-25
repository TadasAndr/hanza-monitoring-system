<template>
  <router-link :class="{ active: isLinkActive }" class="DashboardContent" :to="normalizeRoute">{{
    name
  }}</router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    normalizeRoute() {
      return `/dashboard/${this.name.toLowerCase().replace(" ", "-")}`;
    },
    isLinkActive() {
      return this.$route.params.name === this.name.toLowerCase().replace(" ", "-");
    },
  },
};
</script>

<style scoped>
.active {
  border-right: 6px solid rgba(255, 0, 0, 0.815);
  border-radius: 5px;
  color: red !important;
}
</style>
