<template>
  <div class="scan">
    <page-header :title="this.$route.name"/>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
  name: "Scan",
  components: {PageHeader}
}
</script>

<style scoped>

</style>