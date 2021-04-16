<template>
  <div id="app">
    <nav-bar/>
    <header-nav/>
    <div class="content">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
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

/* Transitions */
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}


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
  padding: 0 30px 30px 280px;
}
</style>
