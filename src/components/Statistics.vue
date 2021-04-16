<template>
  <div class="statistics">
    <page-header :title="this.$route.name"/>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
  name: "Statistics",
  components: {PageHeader}
}
</script>

<style scoped>

</style>