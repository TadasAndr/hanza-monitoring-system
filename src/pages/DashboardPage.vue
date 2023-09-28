<template>
  <base-sidebar :items="linkItems"></base-sidebar>
  <div v-for="item in linkItems" :key="item.id" v-show="currentDashboard?.id === item.id">
    <iframe style="margin: auto auto" :title="item.name" width="100%" height="100%" :src="item.reportLink" frameborder="0"
      allowFullScreen="true"></iframe>
  </div>
  <div v-if="this.$store.state.isSlideSelection" style="margin: auto auto" class="logo-animation">
    <img src="..\assets\hanza_logo.jpeg" alt="Logo" />
  </div>
  <notifications speed="4000" closeOnClick max="3" width="400" />
</template>

<script>
import BaseSidebar from "../components/sidebar/BaseSidebar.vue";
import { EventBus } from "@/event-bus";
import utils from '@/utils';

export default {
  components: {
    BaseSidebar,
  },
  computed: {
    dashboardName() {
      return this.$route.params.name;
    },
  },
  watch: {
    dashboardName: {
      immediate: true,
      handler(newName) {
        const linkItem = this.linkItems.find(
          (l) => l.name === utils.normalizeUrlToTitle(newName)
        );
        this.currentDashboard = linkItem ? linkItem : null;
      },
    },
  },
  data() {
    return {
      currentDashboard: "",
      intervalInstance: null,
      linkItems: [],
    };
  },
  methods: {
    changeSlide() {
      console.log('changeSlide called');
      this.currentDashboard =
        this.$store.state.dashboardsInSlideshow[this.$store.state.currentSlide]; 
      this.$store.commit("incrementSlide");
    },
    startSlideShow() {
      if (this.$store.state.dashboardsInSlideshow.length > 1) {
        if (this.intervalInstance === null) {
          EventBus.emit('change-slideshow-button-text', "Stop slideshow")
          this.$store.commit("toggleSlideSelection", false);
          this.$store.commit("toggleSlideshowInProgress", true);
          this.$router.push("/dashboard/slideshow");
          this.$notify({
            title: "Slideshow",
            text: "Slideshow has started",
          });
          this.changeSlide();
          this.intervalInstance = setInterval(() => {
            this.changeSlide();
            console.log("next slide");
          }, this.$store.state.intervalsBetweenSlides);
        } else {
          this.$notify({
            title: "Slideshow error",
            type: "warn",
            text: "Slideshow is already in progress!",
          });
        }
      } else {
        this.$notify({
          title: "Slideshow error",
          type: "warn",
          text: "Slideshow should contain at least 2 dashboards!",
        });
      }
    },
    stopSlideShow() {
      if (this.$store.state.slideshowInProgress) {
        EventBus.emit('change-slideshow-button-text', "Start slideshow")
        this.$notify({
          title: "Slideshow",
          text: "Slideshow has ended",
        });
        this.$router.push(`/dashboard/${utils.normalizeTitleToUrl(this.currentDashboard.name)}`);
        clearInterval(this.intervalInstance);
        this.intervalInstance = null;
        this.$store.commit("toggleSlideshowInProgress", false);
        this.$store.commit('resetCurrentSlide')
      }
    },
  },
  mounted() {
    EventBus.on("start-slideshow", this.startSlideShow);
    EventBus.on("stop-slideshow", this.stopSlideShow);
  },
  beforeUnmount() {
    EventBus.off("start-slideshow");
    EventBus.off("stop-slideshow");
  },
  async beforeMount() {
    try {
      const response = await fetch('/reports-config.json');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      this.linkItems = await response.json();

      if (this.$route.params.name === 'initializing' || this.$route.params.name === 'edit' || this.$route.params.name === 'slideshow') {
        this.currentDashboard = this.linkItems[0];
        this.$router.push(`/dashboard/${utils.normalizeTitleToUrl(this.linkItems[0].name)}`);
      } else {
        var linkItem = this.linkItems.find(
          (l) => l.name === utils.normalizeUrlToTitle(this.$route.params.name)
        );
        this.currentDashboard = linkItem;
        this.$router.push(`/dashboard/${utils.normalizeTitleToUrl(linkItem?.name)}`);
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  },
};

</script>

<style scoped>
.logo-animation {
  display: inline-block;
  animation: zoomInOut 3s infinite;
}

@keyframes zoomInOut {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }
}
</style>