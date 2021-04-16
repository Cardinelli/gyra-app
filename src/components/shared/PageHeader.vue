<template>
  <div class="page-header">
    <div class="page-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.page-header {
  background: $light_navy;
  color: $white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  .page-title {
    background: $purple;
    border-radius: 4px;
    font-size: 14px;
    padding: 5px;
  }
}

</style>