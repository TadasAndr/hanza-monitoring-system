<template>
  <router-link
    :class="{ active: isLinkActive }"
    class="DashboardContent"
    :to="normalizeRoute"
    >
    {{ dashboardItem.name }}</router-link
  >
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    }
  },
  props: {
    dashboardItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleChange() {
      if (this.isChecked) {
        this.$store.commit("addDashboardToSlideshow", true)
      } else {
        console.log("implement")
      }
    }
  },
  computed: {
    normalizeRoute() {
      return `/dashboard/${this.dashboardItem.name.toLowerCase().replace(" ", "-")}`;
    },
    isLinkActive() {
      return (
        this.$route.params.name === this.dashboardItem.name.toLowerCase().replace(" ", "-")
      );
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
