<template>
  <div class="login">
    <form @submit.prevent="submitForm">
      <h4> Welcome to Gyra</h4>

      <div class="field">
        <label> Username </label>
        <div class="control">
          <input type="text" class="input" v-model="username">
        </div>
      </div>

      <div class="field m-2">
        <label> Password </label>
        <div class="control">
          <input type="password" class="input" v-model="password">
        </div>
      </div>

      <div class="field m-4">
        <div class="control">
          <button class="btn btn-sm btn-success">Log in</button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  methods: {
    submitForm() {
      let formData = {
        username: '',
        password: '',
        errors: []
      }

      if (!this.username) {
        let err = "Username field is required"
        this.errors.push(err)
      } else {
        formData.username = this.username
      }

      if (!this.password) {
        let err = "Password field is required"
        this.errors.push(err)
      } else {
        formData.password = this.password
      }

      this.$store.dispatch('login', formData)
          .then(response => {
            if (response.status && response.status === 200) {
              this.$router.push('/')
            } else {
              this.errors.push(response)
            }
          })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.login {
  background: $light_navy;
  border-radius: 5px;
  width: 420px;
  height: 350px;
  padding: 35px 30px;
  margin: 0 auto;

  h4 {
    color: $white;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid $purple;
  }

  .field {
    input {
      border-radius: 5px;
    }

    input:focus {
      outline: none;
    }
  }

  label {
    color: $white;
  }
}

</style>