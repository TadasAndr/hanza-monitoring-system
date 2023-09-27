<template>
  <div class="sidebarBackground">
    <div class="logoDiv">
      <img class="hanzaLogo" src="@/assets/HanzaLogo.svg" alt="Hanza Logo" />
    </div>
    <dropdown-button name="Dashboards">
      <link-button
        active-class="active-link"
        v-for="item in items"
        :key="item.id"
        :dashboardItem="item"
      ></link-button>
    </dropdown-button>
    <dropdown-button name="Slideshow">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div>
          <p class="custom-font d-inline me-1">Slide selection mode</p>
          <input type="checkbox" v-model="isChecked" @change="handleChange" />
        </div>
        <div class="mt-3 d-flex flex-column">
          <label class="custom-font" for="interval">Interval (ms)</label>
          <input id="interval" type="number" v-model="intervalsBetweenSlides" />
        </div>
        <button
          type="button"
          @click="startSlideShow"
          class="btn btn-success mt-3"
        >
          Start slideshow
        </button>
      </div>
    </dropdown-button>
  </div>
</template>

<script>
import LinkButton from "./LinkButton.vue";
import DropdownButton from "./DropdownButton.vue";

import { EventBus } from "@/event-bus";

export default {
  data() {
    return {
      isChecked: false,
      lastPath: null,
    };
  },
  methods: {
    handleChange() {
      this.$store.commit("toggleSlideSelection", this.isChecked);

      if (this.isChecked) {
        if (this.$route.path !== "/dashboard/edit") {
          this.lastPath = this.$route.path;
        }
        this.$router.push("/dashboard/edit");
      } else {
        this.lastPath ? this.$router.push(this.lastPath) : this.$router.go(-1);
      }
      console.log(this.lastPath);
    },
    startSlideShow() {
      EventBus.emit('start-slideshow')
    },
  },
  computed: {
    intervalsBetweenSlides: {
      get() {
        return this.$store.state.intervalsBetweenSlides;
      },
      set(value) {
        this.$store.commit("setIntervalsBetweenSlides", value);
      },
    },
  },
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
  components: {
    DropdownButton,
    LinkButton,
  },
};
</script>

<style scoped>
.logoDiv {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hanzaLogo {
  width: 60%;
  height: 40%;
}
.sidebarBackground {
  background-color: rgb(26, 43, 76);
  height: 100vh;
  width: 226px;
}
</style>
