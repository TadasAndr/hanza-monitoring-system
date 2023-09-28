<template>
  <base-sidebar :items="linkItems"></base-sidebar>
  <div
    v-for="item in linkItems"
    :key="item.id"
    v-show="currentDashboard?.id === item.id"
  >
    <iframe
      style="margin: auto auto"
      :title="item.name"
      width="100%"
      height="100%"
      :src="item.reportLink"
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
  </div>
  <div
    v-if="this.$store.state.isSlideSelection"
    style="margin: auto auto"
    class="logo-animation"
  >
    <img src="..\assets\hanza_logo.jpeg" alt="Logo" />
  </div>
</template>

<script>
import BaseSidebar from "../components/sidebar/BaseSidebar.vue";
import { EventBus } from "@/event-bus";



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
          (l) => l.name === this.normalizeUrlToTitle(newName)
        );
        this.currentDashboard = linkItem ? linkItem : null;
      },
    },
  },
  data() {
    return {
      currentDashboard: "",
      intervalInstance: null,
      linkItems: [
        {
          id: 1,
          name: "Plasma",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=747670b3-1b9f-45d2-9af1-6de58cc57398&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/plasma.svg",
        },
        {
          id: 2,
          name: "Bending",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=41b9a2ff-7274-466d-94e1-494c792ca9bd&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
            imageSrc: "@/assets/bending.svg",
          },
        {
          id: 3,
          name: "Machining",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=6d44e115-cb39-49fd-a48b-1f2c9320e6cf&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Machining.svg",
        },
        {
          id: 4,
          name: "Welding",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=2421c5ce-630c-4585-8c1c-ba4ff8bc9bb3&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Welding.svg",
        },
        {
          id: 5,
          name: "Wet Paint",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=aed9a907-6ffb-4596-93c7-cf964bbd3930&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Paint.svg",
        },
        {
          id: 6,
          name: "Powder Paint",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=54625cad-e07f-48f0-8588-6a4df58188af&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Paint.svg",
        },
        {
          id: 7,
          name: "Assembly",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=273a3a46-43bf-4cb3-91a7-95f69e55a4b3&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/assembly.svg",
        },
        {
          id: 8,
          name: "Blast",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=3702ac4f-32b7-40f7-9370-909452b2928f&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Blast.svg",
        },
        {
          id: 9,
          name: "Old Blast",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=233a34ac-466d-427d-8be0-a2f4ba1e48aa&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Blast.svg",
        },
        {
          id: 10,
          name: "Tank Wash",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=b8c31e22-ae4c-4ccf-ae28-7a751d33a386&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Washer.svg",
        },
        {
          id: 11,
          name: "Laser",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=39740316-bc01-4de0-89f4-7ed11e5f6fa1&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
        }
      ],
    };
  },
  methods: {
    normalizeUrlToTitle(inputStr) {
      return inputStr
        .split("-")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
    changeSlide() {
      this.currentDashboard =
        this.$store.state.dashboardsInSlideshow[this.$store.state.currentSlide];
      this.$store.commit("incrementSlide");
    },
    startSlideShow() {
      if (this.$store.state.dashboardsInSlideshow.length > 1) {
        this.$store.commit("toggleSlideSelection", false);
        this.$router.push("/dashboard/slideshow");
        this.intervalInstance = setInterval(() => {
          this.changeSlide();
          console.log("next slide");
        }, this.$store.state.intervalsBetweenSlides);
      } else {
        console.log("slideshow should contain at least 2 dashboards!");
      }
    },
    stopSlideShow() {
      clearInterval(this.intervalInstance);
      this.$store.commit('resetCurrentSlide')
    },
  },
  created() {
    var linkItem = this.linkItems.find(
      (l) => l.name === this.normalizeUrlToTitle(this.$route.params.name)
    );
    this.currentDashboard = linkItem;
    console.log(this.currentDashboard);
  },
  mounted() {
    EventBus.on("start-slideshow", this.startSlideShow);
    EventBus.on("stop-slideshow", this.stopSlideShow);
  },
  beforeUnmount() {
    EventBus.off("start-slideshow");
    EventBus.off("stop-slideshow");
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