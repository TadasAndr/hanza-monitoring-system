<template>
  <div class="sidebarBackground">
    <div class="logoDiv">
      <img
        class="hanzaLogo"
        src="@/assets/HanzaLogoWhite.png"
        alt="Hanza Logo"
      />
    </div>
    <dropdown-button name="Dashboards">
      <link-button
        active-class="active-link"
        v-for="item in items"
        :key="item.id"
        :dashboardItem="item"
      ></link-button>
    </dropdown-button>
    <dropdown-button name="Settings">
      <div class="d-flex align-items-center justify-content-center">
        <div>
          <p class="custom-font d-inline me-1">Slide selection mode</p>
          <input type="checkbox" v-model="isChecked" @change="handleChange" />
        </div>
      </div>
    </dropdown-button>
  </div>
</template>

<script>
import LinkButton from "./LinkButton.vue";
import DropdownButton from "./DropdownButton.vue";
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
  background-color: rgb(58, 32, 81);
  height: 100vh;
  width: 226px;
}
</style>
