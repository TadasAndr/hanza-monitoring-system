<template>
    <router-link class="DashboardContent" :to=normalizeRoute>{{ name }}</router-link>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
    },
    computed: {
        normalizeRoute() {
            return `/dashboard/${this.name.toLowerCase().replace(' ', '-')}`;
        }
    }
}
</script>
