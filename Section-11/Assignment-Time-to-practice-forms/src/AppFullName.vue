<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input id="firstName" class="form-control" v-model="firstName" @change="updateFullname" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input id="lastName" class="form-control" v-model="lastName" @change="updateFullname" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    updateFullname() {
        var fullName = this.firstName + " " + this.lastName;
        console.log(fullName);
      this.$emit("fullNameChanged", fullName);
    }
  }
};
</script>
<style scoped>
</style>