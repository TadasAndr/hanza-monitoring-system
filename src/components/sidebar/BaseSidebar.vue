<template>
  <div class="sidebarBackground">
    <div class="logoDiv"><img class="hanzaLogo" src="@/assets/HanzaLogoWhite.png" alt="Hanza Logo" /></div>
    <sidebar-item></sidebar-item>
    
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
export default {
  data() {
    return {
      isVisible: false,
      name: "Tadas",
    };
  },
  name: "BaseSidebar",
  components: {
    SidebarItem,
  },
  methods: {
    setVisibility: () => {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.logoDiv{
width: 100%;
height: 10%;
text-align: center;
padding: 10% 0;
}

.hanzaLogo {
  width: 60%;
  height: 50%;

}
.sidebarBackground {
  background-color: rgb(58, 32, 81);
  height: 100vh;
  width: 226px;
}
</style>
