<template>
  <div class="navigation-bar">
    <div class="navigation-bar-menu">
      <div class="navigation-bar-logo">
        <h4> <span> <i class="fas fa-cat"></i> </span> Gyra</h4>
      </div>

      <router-link to="/home"> <span> <i class="fas fa-atom"></i> </span> Dashboard </router-link>
      <router-link to="/scan"> <span> <i class="fas fa-terminal"></i> </span> Scan </router-link>
      <router-link to="/statistics"> <span> <i class="fas fa-poll"></i> </span> Statistics </router-link>
      <router-link to="/profile"> <span> <i class="far fa-id-card"></i> </span> Profile </router-link>
      <router-link to="/settings"> <span> <i class="fas fa-cog"></i> </span> Settings </router-link>
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