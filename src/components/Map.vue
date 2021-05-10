<template>
  <div class="statistics">
    <page-header :title="this.$route.name"/>
    <Iframe
        class="mt-2"
        width="100%"
        height="550px"
        src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
        frameborder="0"/>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
  name: "Map",
  components: {PageHeader}
}
</script>

<style scoped>

</style>