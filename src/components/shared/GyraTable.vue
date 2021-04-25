<template>
  <div class="gyra-table">
    <b-table :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "GyraTable",
  props: {
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.gyra-table {
  background: $light_navy;
  border-radius: 4px;
  padding: 5px 15px;

  table {
    color: $white;
    border-radius: 4px;
    background: $light_navy;
    font-size: 14px;
  }
}
</style>