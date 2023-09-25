<template>
  <div class="sidebarBackground">
    <div class="logoDiv"><img class="hanzaLogo" src="@/assets/HanzaLogoWhite.png" alt="Hanza Logo" /></div>    
    <dropdown-button :nestedLinks="items" name="Dashboards"></dropdown-button>
  </div>
</template>

<script>
import DropdownButton from './DropdownButton.vue';
export default {
  props: {
    items: {
        type: Array,
        required: false
    }
  },
  name: "BaseSidebar",
  components: {
    DropdownButton
  },
};
</script>

<style scoped>
.logoDiv{
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
