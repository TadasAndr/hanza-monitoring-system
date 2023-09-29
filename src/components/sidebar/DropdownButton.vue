<template>
  <div class="SidebarItems">
    <div class="accordion-item">
      <div class="accordion-header" @click="toggleExpanded">
        <div class="header-content">
          <img class="DashboardIcon" src="@/assets/DashboardIcon.png" alt="Hanza Logo" />
          <span class="custom-font">{{ name }}</span>
          <img class="dropdownArrow" :class="{ isExpanded: isExpanded }" src="@/assets/dropdownArrow.png"
            alt="Dropdown Arrow" @click="toggleExpanded" />
        </div>
        <i :class="['icon', isExpanded ? 'icon-minus' : 'icon-plus']"></i>,,a
      </div>
      <transition name="dropdown-fade">
        <div v-if="isExpanded" class="accordion-content">
          <div class="DashboardContentDiv">
            <slot> </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus';

export default {
  data() {
    return {
      isExpanded: true,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: false,
    },
  },
  name: "DropdownButton",
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
  },
  mounted() {
    EventBus.on("open-dropdown", () => { this.isExpanded = true })
  },
  beforeUnmount() {
    EventBus.off("open-dropdown")
  }
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* css reset */

@font-face {
  font-family: "Inter";
  src: url("~@/assets/Fonts/Inter-VariableFont_slnt,wght.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.custom-font {
  font-family: "Inter";
  font-size: 16px;
  color: var(--hanza-light-gray);
}

.accordion-header {
  border-bottom: solid 1px var(--hanza-violet);
  padding: 10px;
}

.accordion-header:hover {
  cursor: pointer;
  background-color: var(--hanza-blue);
  color: white !important;
  border-radius: 5%;
}

.DashboardIcon {
  margin-right: 10px;
  vertical-align: bottom;
  height: 20px;
}

.accordion-content {
  margin: 10px 0;
}

.DashboardContent:hover {
  background-color: var(--hanza-blue);
  color: white !important;
  border-radius: 5%;
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
  margin: 15px 10px;
  height: 30px;
  text-align: bottom;
}

.dropdownArrow {
  vertical-align: middle;
  height: 12px;
  margin: 5px 1rem;
  pointer-events: none;
  float: right !important;
}

.dropdown-content {
  overflow-y: hidden;
  max-height: 300px; 
  transition: max-height 0.5s ease-in-out;
}

.dropdown-fade-enter-from {
  max-height: 0;
}

.dropdown-fade-leave-to {
  max-height: 0;
}

.isExpanded {
  transform: rotate(180deg);
  transition: transform 0s;
  vertical-align: top;
  pointer-events: none;
}
</style>
