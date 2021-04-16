<template>
  <div class="settings">
    <page-header :title="this.$route.name"/>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
  name: "Settings",
  components: {PageHeader}
}
</script>

<style scoped>

</style>