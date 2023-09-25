<template>
  <base-sidebar :items="linkItems"></base-sidebar>
  <iframe
    style="margin: auto auto"
    title="test"
    width="1140"
    height="541.25"
    :src="currentDashboard"
    frameborder="0"
    allowFullScreen="true"
  ></iframe>
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
        var linkItem = this.linkItems.find(l => l.name === this.normalizeUrlToTitle(newName))
        this.currentDashboard = linkItem?.reportLink;
        console.log(this.normalizeUrlToTitle(newName));
      },
    },
  },
  data() {
    return {
      currentDashboard: "",
      linkItems: [
        {
          id: 1,
          name: "Plasma",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=b8c31e22-ae4c-4ccf-ae28-7a751d33a386&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
        },
        {
          id: 2,
          name: "Bending",
          reportLink:
            "https://app.powerbi.com/reportEmbed?reportId=9096e9d3-9ce6-42ee-a0d0-85d997c6d223&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
        },
        {
          id: 3,
          name: "Machining",
          reportLink: "https://app.powerbi.com/reportEmbed?reportId=f4eae29e-bf06-4a7b-b3d2-ccc9e2dcb1b8&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
        },
        {
          id: 4,
          name: "Welding",
        },
        {
          id: 5,
          name: "Wet Paint",
        },
        {
          id: 6,
          name: "Powder Paint",
        },
        {
          id: 7,
          name: "Assembly",
        },
        {
          id: 8,
          name: "Blast",
        },
        {
          id: 9,
          name: "Old Blast",
        },
        {
          id: 10,
          name: "Tank Wash",
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
  },
  mounted() {
    var linkItem = this.linkItems.find(l => l.name === this.normalizeUrlToTitle(this.$route.params.name))
    this.currentDashboard = linkItem?.reportLink;
  }
};
</script>

<style scoped>
</style>