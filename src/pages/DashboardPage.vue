<template>
  <base-sidebar :items="linkItems"></base-sidebar>
  <div
    v-for="item in linkItems"
    :key="item.id"
    v-show="currentDashboard?.name === item.name"
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
  <div v-if="this.$store.state.isSlideSelection" style="margin: auto auto" class="logo-animation">
    <img src="..\assets\hanza_logo.jpeg" alt="Logo" />
  </div>
</template>

<script>
import BaseSidebar from "../components/sidebar/BaseSidebar.vue";

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
      dashboardsToShowInSlides: [1, 3, 2],
      intervalInMs: 5000,
      slideInterval: null,
      linkItems: [
        {
          id: 1,
          name: "Plasma",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=b8c31e22-ae4c-4ccf-ae28-7a751d33a386&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/plasma.svg",
        },
        {
          id: 2,
          name: "Bending",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=9096e9d3-9ce6-42ee-a0d0-85d997c6d223&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
            imageSrc: "@/assets/bending.svg",
          },
        {
          id: 3,
          name: "Machining",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=f4eae29e-bf06-4a7b-b3d2-ccc9e2dcb1b8&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
          imageSrc: "@/assets/Machining.svg",
        },
        {
          id: 4,
          name: "Welding",
          imageSrc: "@/assets/Welding.svg",
        },
        {
          id: 5,
          name: "Wet Paint",
          imageSrc: "@/assets/Paint.svg",
        },
        {
          id: 6,
          name: "Powder Paint",
          imageSrc: "@/assets/Paint.svg",
        },
        {
          id: 7,
          name: "Assembly",
          imageSrc: "@/assets/assembly.svg",
        },
        {
          id: 8,
          name: "Blast",
          imageSrc: "@/assets/Blast.svg",
        },
        {
          id: 9,
          name: "Old Blast",
          imageSrc: "@/assets/Blast.svg",
        },
        {
          id: 10,
          name: "Tank Wash",
          imageSrc: "@/assets/Washer.svg",
        },
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
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        // not implemented
      }, this.intervalInMs);
    },
    stopSlideShow() {
      clearInterval(this.slideInterval);
    },
  },
  created() {
    var linkItem = this.linkItems.find(
      (l) => l.name === this.normalizeUrlToTitle(this.$route.params.name)
    );
    this.currentDashboard = linkItem;
    console.log(this.currentDashboard);
  },
};
</script>

<style scoped>

.logo-animation {
  display: inline-block;
  animation: zoomInOut 3s infinite;
}

@keyframes zoomInOut {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>