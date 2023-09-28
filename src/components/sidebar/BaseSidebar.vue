<template>
  <div class="sidebarBackground" v-if="!isSidebarCollapsed">
    <div class="logoDiv">
      <img class="hanzaLogo" src="@/assets/HanzaLogo.svg" alt="Hanza Logo" />
    </div>
    <dropdown-button name="Dashboards">
      <link-button active-class="active-link" v-for="item in items" :key="item.id" :dashboardItem="item"></link-button>
    </dropdown-button>
    <dropdown-button name="Slideshow">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="mt-3 d-flex flex-column">
          <label class="custom-font" for="interval">Interval (ms)</label>
          <input id="interval" type="number" v-model="intervalsBetweenSlides" />
        </div>
        <label class="checkbox-container">
          Select
          <input :disabled="slideshowInProgress" type="checkbox" v-model="isChecked" @change="handleChange"
            class="checkbox-input" />
          <span class="checkbox-label"></span>
        </label>
        <button type="button" @click="startSlideShow" class="sidebar-button">
          Start slideshow
        </button>
      </div>
    </dropdown-button>
    <div v-if="slideshowInProgress" style="position: absolute; bottom: 0; width: 226px;">
      <button @click="collapseSidebar" class="collapse-button">
        <span class="custom-font fw-bold">Collapse</span>
        <img src="@/assets/dropdownArrow.png" class="dropdownArrow arrow-rotate-close">
      </button>
    </div>
  </div>
  <div v-if="isSidebarCollapsed">
    <button @click="expandSidebar" class="expand-button collapse-button">
      <span class="custom-font fw-bold">Expand</span>
      <img src="@/assets/dropdownArrow.png" class="dropdownArrow arrow-rotate-open">
    </button>
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
        EventBus.emit('open-dropdown')
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
      EventBus.emit('start-slideshow');
    },
    collapseSidebar() {
      this.$store.commit('setIsSidebarCollapsed', true)
    },
    expandSidebar() {
      this.$store.commit('setIsSidebarCollapsed', false)
    }
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
    slideshowInProgress() {
      return this.$store.state.slideshowInProgress;
    },
    isSidebarCollapsed() {
      return this.$store.state.isSidebarCollapsed;
    }
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
  background-color: var(--hanza-dark-blue);
  height: 100vh;
  width: 226px;
}

.arrow-rotate-close {
  transform: rotate(90deg)
}

.arrow-rotate-open {
  transform: rotate(-90deg)
}

.collapse-button {
  width: 3rem;
  height: 3rem;
  background-color: var(--hanza-dark-blue);
  width: 100%;
  border: none;
  border-radius: 3px;
}

.expand-button {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 226px;
  z-index: 500;
}

.collapse-button:hover {
  background-color: var(--hanza-green);
}

.sidebar-button {
  width: 100%;
  height: 50px;
  background-color: #008CBA;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.sidebar-button:hover {
  background-color: #005f5f;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #ccc;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.checkbox-container:hover {
  background-color: #c1c1c1;
}

.checkbox-container .checkbox-input:checked+.checkbox-label {
  background-color: #008CBA;
}
</style>
