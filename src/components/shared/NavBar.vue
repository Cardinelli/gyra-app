<template>
  <div class="navigation-bar">
    <div class="navigation-bar-menu">
      <div class="navigation-bar-logo">
        <h4> <span> <ion-icon name="logo-octocat"></ion-icon> </span> Gyra</h4>
      </div>

      <router-link to="/" exact class="d-flex align-items-center"> <span> <ion-icon name="apps-outline"></ion-icon> </span> <h6>Dashboard</h6> </router-link>
      <router-link to="/whois" class="d-flex align-items-center"> <span> <ion-icon name="search-outline"></ion-icon> </span><h6>Whois</h6>  </router-link>
      <router-link to="/scan" class="d-flex align-items-center"> <span> <ion-icon name="barcode-outline"></ion-icon> </span> <h6>Scan</h6> </router-link>
      <router-link to="/map" class="d-flex align-items-center"> <span> <ion-icon name="earth-outline"></ion-icon> </span> <h6>Map</h6> </router-link>
      <router-link to="/profile" class="d-flex align-items-center"> <span> <ion-icon name="person-circle-outline"></ion-icon> </span> <h6>Profile</h6> </router-link>
      <router-link to="/settings" class="d-flex align-items-center"> <span> <ion-icon name="cog-outline"></ion-icon> </span> <h6>Settings</h6> </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.navigation-bar {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: calc(100vh - 80px);
  margin: 80px 20px;
  background: $app_background;
  color: $white;

  .navigation-bar-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background: linear-gradient(0deg,$green,$light_green);
    width: 100%;
    height: 90%;

    .navigation-bar-logo {
      margin: 30px 0;
      border-bottom: 1px solid $gray;
      width: 80%;

      h4 {
        span {
          color: $purple;
        }
      }
    }

    a {
      text-decoration: none;
      text-align: start;
      padding-left: 25px;
      margin: 15px;
      font-size: 13px;
      color: $gray;
      width: 100%;

      span {
        font-size: 20px;
        margin-right: 10px;
      }
    }

    a:hover {
      color: $white;
    }

    .router-link-active {
      text-decoration: none;
      color: $white;
    }
  }

}

</style>