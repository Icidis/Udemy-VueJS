<template>
  <div class="container">
    <form v-if="!formSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-fullname v-on:fullNameChanged="fullNameChanged"></app-fullname>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" class="form-control" v-model="userData.eMail" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" class="form-control" type="password" v-model="userData.password" />
          </div>
          <div class="form-group">
            <label for="yes">
              <input type="radio" id="yes" value="Yes" v-model="userData.storeData" /> Yes
            </label>
            <label for="no">
              <input type="radio" id="no" value="No" v-model="userData.storeData" /> No
            </label>
          </div>
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
      <button class="btn btn-success" @click.prevent="submitted">Submit</button>
    </form>
    <hr />
    <div class="row" v-if="formSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Mail: {{ userData.eMail }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ userData.storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppFullName from "./AppFullName.vue";
export default {
  components: {
    AppFullname: AppFullName
  },
  data() {
    return {
      formSubmitted: false,
      userData: {
        fullName: "",
        eMail: "",
        password: "",
        storeData: "Yes"
      }
    };
  },
  methods: {
    submitted() {
        this.formSubmitted = true;
    },
    fullNameChanged(e) {
      this.userData.fullName = e;
    }
  }
};
</script>

<style>
</style>
