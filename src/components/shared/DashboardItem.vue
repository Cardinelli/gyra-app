<template>
  <div class="dashboard-item">
    <div class="logo">
      <i class="far fa-hdd"></i>
    </div>
    <div class="description">
      <div class="title">
        <h6> Server </h6>
      </div>
      <div class="text">
        <h6> Status - <span> <i class="fas fa-power-off"></i> ON </span> </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardItem"
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.dashboard-item {
  margin: 30px 0;
  border-radius: 4px;
  width: 300px;
  height: 100px;
  background: $light_navy;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    background: $purple;
    border-radius: 4px;
    padding: 20px;
    color: $white;
    font-size: 50px;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .text {
      span {
        color: $green;
      }
    }
  }
}

</style>