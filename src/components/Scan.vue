<template>
  <div class="scan">
    <page-header :title="this.$route.name"/>
    <div class="scan-type-selector">
      <div class="scan-selector-item" :class="{active: selectedScans.includes('nmap')}">
        <input id="nmap" @change="changeEvent('nmap')" type="checkbox">
        <label for="nmap" class="fas fa-shield-alt"></label>
      </div>

      <div class="scan-selector-item" :class="{active: selectedScans.includes('whois')}">
        <input id="whois" @change="changeEvent('whois')" type="checkbox">
        <label for="whois" class="fas fa-server"></label>
      </div>

      <div class="scan-selector-item" :class="{active: selectedScans.includes('xss')}">
        <input id="xss" @change="changeEvent('xss')" type="checkbox">
        <label for="xss" class="fas fa-user-secret"></label>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      selectedScans: []
    }
  },
  methods: {
    changeEvent(param) {
      if (!this.selectedScans.includes(param)) {
        this.selectedScans.push(param)
      } else {
        this.selectedScans = this.selectedScans.filter(e => e !== param)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";
.scan {
  .scan-type-selector {
    display: flex;
    background: $light_navy;
    margin: 15px 0;
    border-radius: 5px;
    padding: 15px;

    .active {
      color: $white!important;
      background: $light_green!important;
    }

    .scan-selector-item {
      position: relative;
      cursor: pointer;
      font-size: 25px;
      background: $app_background;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: $gray;
      margin: 0 15px;
      padding: 8px;
      z-index: 9999;

      input {
        opacity: 0;
        position: absolute;
      }

      label {
        cursor: pointer;
        position: absolute;
        left: 13.5px;
        top: 13px;
      }
    }

    .scan-selector-item:hover {
      background: $light_green;
      color: $white;
      -webkit-transition: background 0.5s; /* For Safari 3.0 to 6.0 */
      transition: background 0.5s; /* For modern browsers */
    }
  }
}

</style>