<template>
  <div class="home">
    <page-header :title="this.$route.name"/>
    <div class="home-statuses">
      <dashboard-item/>
      <dashboard-item/>
      <dashboard-item/>
    </div>
    <gyra-table :items="items"/>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
import DashboardItem from "./shared/DashboardItem";
import { Bar } from 'vue-chartjs';
import GyraTable from "./shared/GyraTable";
export default {
  data() {
    return {
      data: [1,2,3,4],
      options: ['a', 'b'],
      items: [
        { id: 1, target: 'www.scan-target.com', dateTime: '04-04-2021 15:00', response: 'Success', Action: 'View' },
        { id: 2, target: 'www.scan-target.com', dateTime: '04-04-2021 15:00', response: 'Success', Action: 'View' },
        { id: 3, target: 'www.scan-target.com', dateTime: '04-04-2021 15:00', response: 'Success', Action: 'View' },
      ]
    }
  },
  extends: Bar,
  components: {
    GyraTable,
    DashboardItem,
    PageHeader
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.home {
  .home-statuses {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }
}

</style>