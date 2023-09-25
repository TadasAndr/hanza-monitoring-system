<template>
    <sidebar-item></sidebar-item>
    <span>{{ name }}</span>
</template>

<script>
import SidebarItem from './SidebarItem.vue';
export default {
    data() {
        return {
            isVisible: false,
            name: "Tadas"
        }
    },
    name: 'BaseSidebar',
    components: {
        SidebarItem,
    },
    methods: {
        setVisibility: () => {
            this.isVisible = !this.isVisible
        }
    }
}
</script>

<style scoped>

</style>
