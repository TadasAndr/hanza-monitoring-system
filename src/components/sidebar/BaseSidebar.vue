<template>
  <div class="sidebarBackground">
    <div class="logoDiv">
      <img
        class="hanzaLogo"
        src="@/assets/HanzaLogo.svg"
        alt="Hanza Logo"
      />
    </div>
    <dropdown-button name="Dashboards">
      <link-button
        active-class="active-link"
        v-for="item in items"
        :key="item.id"
        :name="item.name"
      ></link-button>
    </dropdown-button>
    <dropdown-button name="Settings"> </dropdown-button>
  </div>
</template>

<script>
import LinkButton from "./LinkButton.vue";
import DropdownButton from "./DropdownButton.vue";
export default {
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
  name: "BaseSidebar",
  components: {
    DropdownButton,
    LinkButton
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
