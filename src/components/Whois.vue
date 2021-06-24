<template>
  <div class="whois">
    <page-header :title="this.$route.name"/>

    <div class="whois-content d-flex flex-column align-items-center">
      <b-row class="d-flex align-items-center justify-content-around w-100 mt-2 mb-5">
        <b-col class="d-flex" sm="6">
          <b-form-input v-model="whois" placeholder="IP / Domain"></b-form-input>
        </b-col>
        <b-col class="d-flex pl-0" sm-6>
          <b-button class="btn btn-success btn-sm"> Search </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
  name: "Whois",
  components: {PageHeader},
  data() {
    return {
      whois: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";
  .whois {
    .whois-content {
      display: flex;
      background: $light_navy;
      margin: 15px 0;
      border-radius: 5px;
      padding: 15px;

      input {
        border-radius: 5px;
        border: none;
      }
    }
  }
</style>