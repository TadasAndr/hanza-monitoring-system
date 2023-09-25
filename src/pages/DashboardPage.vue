<template>
    <base-sidebar :items=linkItems></base-sidebar>
</template>

<script>
import BaseSidebar from '../components/sidebar/BaseSidebar.vue'

export default {
    components: {
        BaseSidebar
    },
    data() {
        return {
            linkItems: [{
            id: 1,
            name: "Plasma",
        },
        {
            id: 2,
            name: "Bending",
        },
        {
            id: 3,
            name: "Machining",
        },
        {
            id: 4,
            name: "Welding",
        },
        {
            id: 5,
            name: "Wet Paint",
        },
        {
            id: 6,
            name: "Powder Paint",
        },
        {
            id: 7,
            name: "Assembly",
        },
        {
            id: 8,
            name: "Blast",
        },
        {
            id: 9,
            name: "Old Blast",
        },
        {
            id: 10,
            name: "Tank Wash",
        }
        ]
        }
    },
}
</script>

<style scoped>

</style>