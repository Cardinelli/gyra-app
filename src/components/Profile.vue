<template>
  <div class="profile">
    <page-header :title="this.$route.name"/>

    <div class="profile-form">
      <b-form>
        <b-row class="mb-5">
          <b-col>
            <b-form-input
                id="input-formatter"
                v-model="userForm.name"
                placeholder="Name"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
                id="input-formatter"
                v-model="userForm.surname"
                placeholder="Surname"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-datepicker
                id="example-datepicker"
                v-model="userForm.birth_date"
                placeholder="Birth Date"
                class="mb-2">
            </b-form-datepicker>
          </b-col>
        </b-row>

        <b-row class="mb-5">
          <b-col>
            <b-form-input
                id="input-formatter"
                v-model="userForm.email"
                placeholder="Email"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-select
                v-model="userForm.packetType"
                :options="packets">
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-checkbox
                switch
                v-model="userForm.is_company"
                :value="userForm.is_company"
                size="lg">
              Company
            </b-form-checkbox>
          </b-col>
        </b-row>

        <b-row class="mb-5">
          <b-col>
            <b-form-input
                id="input-formatter"
                v-model="userForm.company.name"
                placeholder="Company Name"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
                id="input-formatter"
                v-model="userForm.company.legal_name"
                placeholder="Company Legal Name"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
                id="input-formatter"
                v-model="userForm.company.identity"
                placeholder="Company Identity Number"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="justify-content-end">
          <b-button class="btn btn-success m-3"> Save </b-button>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
  name: "Profile",
  components: {PageHeader},
  data() {
    return {
      userForm: {
        name: '',
        surname: '',
        email: '',
        packetType: '',
        birth_date: '',
        is_company: false,
        company: {
          name: '',
          legal_name: '',
          identity: ''
        }
      },
      packets: [
        { value: 'Premium', text: 'Premium' },
        { value: 'Basic', text: 'Basic' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors";

.profile {


  .profile-form {
    background: $light_navy;
    border-radius: 4px;
    padding: 20px;
    margin: 25px 0;
  }
}
</style>