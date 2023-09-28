<template>
<h1><span style="color: red;">Red team</span> says hi</h1>
</template>

<script>
export default {
    beforeMount() {
        this.$router.push('/dashboard/initializing');
    }
}
</script>

<style scoped>

</style>
