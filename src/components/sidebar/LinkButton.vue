<template>
  <router-link
    v-if="!this.$store.state.isSlideSelection"
    :class="{ active: isLinkActive }"
    class="DashboardContent"
    @click="stopSlideShow"
    :to="normalizeRoute"
  >
    {{ dashboardItem.name }}</router-link
  >
  <button
    :class="{ machineSelected: isInSlideArray }"
    v-else
    @click="handleChange"
    class="DashboardContent a-button"
  >
  <span v-if="typeof currentSlideIndex === 'number' && currentSlideIndex >= 0">
    {{ currentSlideIndex + 1 }}
  </span>
    {{ dashboardItem.name }}
  </button>
</template>

<script>
import { EventBus } from '@/event-bus';

export default {
  data() {
    return {
      isChecked: false,
      isInSlideArray: false,
      currentSlideIndex: null
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
        this.$store.commit(
          "removeDashboardFromSlideshow",
          this.dashboardItem.id
        );
      }
    },
    stopSlideShow() {
      EventBus.emit('stop-slideshow')
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
    dashboardsInSlideshow() {
      return this.$store.state.dashboardsInSlideshow;
    },
  },
  watch: {
    dashboardsInSlideshow: {
      immediate: true,
      deep: true,
      handler() {
        const index = this.$store.state.dashboardsInSlideshow.findIndex(
          (s) => s.id === this.dashboardItem.id
        );
        this.isInSlideArray = index !== -1; // true if the item exists, false otherwise.
        if (this.isInSlideArray) {
          this.currentSlideIndex = index;
        } else {
          this.currentSlideIndex = null;
        }
      },
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
  padding: 0 4rem 0 0;
}

.machineSelected {
  padding-left: 3px;
  border-left: 3px solid yellowgreen;
}
</style>
