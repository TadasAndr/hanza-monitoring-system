<template>
  <div class="SidebarItems">
    <div class="accordion-item">
      <div class="accordion-header" @click="toggleExpanded()">
        <div class="header-content">
          <img
            class="DashboardIcon"
            src="@/assets/DashboardIcon.png"
            alt="Hanza Logo"
          />
          <span class="custom-font">{{ name }}</span>
        </div>
        <i :class="['icon', isExpanded ? 'icon-minus' : 'icon-plus']"></i>
      </div>
      <div v-show="isExpanded" class="accordion-content">
        <div class="DashboardContentDiv">
          <link-button v-for="item in nestedLinks" :key=item.id :name=item.name></link-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue';
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  props: {
    nestedLinks: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  name: "DropdownButton",
  components: {
    LinkButton
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    }
  },
};
</script>

<style>
@font-face {
  font-family: "Inter";
  src: url("~@/assets/Fonts/Inter-VariableFont_slnt,wght.ttf")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

.custom-font {
  font-family: "Inter";
  font-size: 16px;
  color: rgb(185, 180, 199);
}
.accordion-header {
  display: flex;
  align-items: center;
  border-bottom: solid 1px rgb(217, 217, 217);

  padding: 10px;
}
.accordion-header:hover {
    cursor: pointer;
    background-color: rgba(99, 49, 143, 0.8);
    font-weight: bold;
}

.DashboardIcon {
  margin-right: 10px;
  vertical-align: bottom;
}

.accordion-content {
  margin: 10px 0;

}
.DashboardContent:hover {
    background-color: rgba(99, 49, 143, 0.8);
    font-weight: bold;
}

.icon {
  margin-left: auto;
}

.DashboardContentDiv .DashboardContent {
  text-decoration: none;
  font-family: "Inter";
  font-size: 16px;
  color: rgb(185, 180, 199);
  display: block;
  border-bottom: solid 1px rgb(217, 217, 217);
  margin: 20px 10px;
}
</style>
