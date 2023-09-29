<template>
  <router-link v-if="!this.$store.state.isSlideSelection" :class="{ active: isLinkActive }" class="sidebar-button-nav"
    @click="stopSlideShow" :to="normalizeRoute">
    <img style="width: 1rem; fill: white; margin-left: 6px;" class="me-1" :src=svgImg />
      <span>
        {{ dashboardItem.name }}
      </span></router-link>
  <button :class="{ machineSelected: isInSlideArray }" v-else @click="handleChange"
    class="sidebar-button-nav a-button d-flex flex-row justify-content-between pe-2">
    <div>
      <img style="width: 1rem; fill: white; margin-left: 6px;" class="me-1" :src=svgImg />
      <span>
        {{ dashboardItem.name }}
      </span>
    </div>
    <span style="color: var(--hanza-green); font-weight: bold; padding-left: 10px;" class="me-1"
      v-if="typeof currentSlideIndex === 'number' && currentSlideIndex >= 0">
      {{ currentSlideIndex + 1 }}
    </span>
  </button>
</template>

<script>
import { EventBus } from '@/event-bus';

export default {
  data() {
    return {
      isChecked: false,
      isInSlideArray: false,
      currentSlideIndex: null,
      svgImg: null,
    };
  },
  beforeMount() {
    this.svgImg = process.env.BASE_URL + 'images/' + this.dashboardItem.imageSrc;
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
    isLinkActive() {
      return (
        this.$route.params.name ===
        this.dashboardItem.name.toLowerCase().replace(" ", "-")
      );
    },
    dashboardsInSlideshow() {
      return this.$store.state.dashboardsInSlideshow;
    },
    normalizeRoute() {
      return `/dashboard/${this.dashboardItem.name
        .toLowerCase()
        .replace(" ", "-")}`;
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
        this.isInSlideArray = index !== -1;
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
  background-color: var(--hanza-red);
  color: white !important;
}

.a-button {
  background-color: none;
  background: none;
  border: none;
}

.machineSelected {
  padding-left: 3px;
  border-left: 3px solid var(--hanza-green);
}

.sidebar-button-nav {
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-family: "Inter";
  font-size: 16px;
  color: rgb(185, 180, 199);
  display: flex;
  padding: 0;
  align-items: center;
}

.sidebar-button-nav:hover {
  background-color: var(--hanza-blue);
  color: white !important;
}
</style>
