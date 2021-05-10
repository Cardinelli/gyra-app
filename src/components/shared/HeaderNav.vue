<template>
  <div class="header-nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Company Name</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>
                <img width="45px" height="45px" src="https://i.dlpng.com/static/png/6860651_preview.png" alt="">
                John Doe
              </em>
            </template>
            <b-dropdown-item to="/profile" href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  methods: {
    logOut() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.header-nav {
  padding: 2px 40px;
  width: 100%;

  .navbar-brand {
    font-size: 15px;
  }

  .bg-info {
    background: $app_background!important;
  }
}

</style>