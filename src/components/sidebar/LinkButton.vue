<template>
  <router-link
    v-if="!this.$store.state.isSlideSelection"
    :class="{ active: isLinkActive }"
    class="DashboardContent"
    :to="normalizeRoute"
  >
    {{ dashboardItem.name }}</router-link
  >
  <button v-else @click="handleChange" class="DashboardContent a-button">
    {{ dashboardItem.name }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  props: {
    dashboardItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleChange() {
      this.isChecked = !this.isChecked;
      if (this.isChecked) {
        this.$store.commit("addDashboardToSlideshow", this.dashboardItem);
      } else {
        this.$store.commit("removeDashboardFromSlideshow", this.dashboardItem.id);
      }
    },
  },
  computed: {
    normalizeRoute() {
      return `/dashboard/${this.dashboardItem.name
        .toLowerCase()
        .replace(" ", "-")}`;
    },
    isLinkActive() {
      return (
        this.$route.params.name ===
        this.dashboardItem.name.toLowerCase().replace(" ", "-")
      );
    },
    isSlideSelection() {
      return this.$store.state.isSlideSelection;
    },
  },
  watch: {
    isSlideSelection: {
      immediate: true,
      handler() {
        
        console.log("slide selection changed")
      }
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

.a-button {
  background-color: none;
  background: none;
  border: none;
  padding: 0;
}
</style>
