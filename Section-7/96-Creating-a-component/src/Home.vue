<template>
  <!-- 
      Component template should contain exactly one root element

  <p>Server Status {{ status }}</p>
  <hr />
  <button v-on:click="changeStatus">Change Status</button>-->

  <!-- 
      This fixes the problem by moving all elements into a root element
  -->
  <div>
    <p>Server Status {{ status }}</p>
    <hr />
    <button v-on:click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    // ES5
    // changeStatus: function() {

    // },
    // ES6
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>