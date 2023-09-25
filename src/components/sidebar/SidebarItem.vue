<template>
  <div class="SidebarItems">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleItem(index)">
        <div class="header-content">
          <img
            class="DashboardIcon"
            src="@/assets/DashboardIcon.png"
            alt="Hanza Logo"
          />
          <span class="custom-font">{{ item.title }}</span>
        </div>
        <i :class="['icon', item.expanded ? 'icon-minus' : 'icon-plus']"></i>
      </div>
      <div v-show="item.expanded" class="accordion-content">
        <div class="DashboardContentDiv" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Dashboards",
          content:
            '<a class = "DashboardContent" href="#Plasma">Plasma</a>' +
            '<a class = "DashboardContent" href="#Laser">Laser</a>' +
            '<a class = "DashboardContent" href="#Bending">Bending</a>' +
            '<a class = "DashboardContent" href="#Machining">Machining</a>' +
            '<a class = "DashboardContent" href="#Welding">Welding</a>' +
            '<a class = "DashboardContent" href="#WetPain">Wet Paint</a>' +
            '<a class = "DashboardContent" href="#PowderPaint">Powder Paint</a>' +
            '<a class = "DashboardContent" href="#Assembly">Assembly</a>' +
            '<a class = "DashboardContent" href="#Blast">Blast</a>' +
            '<a class = "DashboardContent" href="#OldBlast">Old Blast</a>' +
            '<a class = "DashboardContent" href="#TankWash">Tank Wash</a>',
          expanded: false,
        },
      ],
    };
  },
  name: "SidebarItem",
  components: {},
  methods: {
    toggleItem(index) {
      this.items[index].expanded = !this.items[index].expanded;
    },
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
