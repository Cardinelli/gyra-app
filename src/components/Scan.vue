<template>
  <div class="scan">
    <page-header :title="this.$route.name"/>
    <div class="scan-type-selector">
      <MultiSelect :selected="selected" :options="options" />
    </div>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
import MultiSelect from "./shared/MultiSelect";

export default {
  components: {PageHeader, MultiSelect},
  data() {
    return {
      selected: null,
      options: [
        { name: 'NMAP', code: 'nmap' },
        { name: 'WHOIS', code: 'whois' },
        { name: 'SQL INJECTION', code: 'sql-injection' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";
.scan {
  .scan-type-selector {
    background: $light_navy;
    margin: 15px 0;
    border-radius: 5px;
    padding: 15px;
  }
}

</style>