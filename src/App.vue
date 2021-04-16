<template>
  <div id="app">
    <nav-bar/>
    <header-nav/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/shared/NavBar";
import HeaderNav from "./components/shared/HeaderNav";

export default {
  name: 'App',
  components: {
    HeaderNav,
    NavBar
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/colors.scss";

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $app_background;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.content {
  padding: 78px 30px 30px 280px;
}
</style>
