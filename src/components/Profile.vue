<template>
  <div class="profile">
    <page-header :title="this.$route.name"/>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
  name: "Profile",
  components: {PageHeader}
}
</script>

<style scoped>

</style>