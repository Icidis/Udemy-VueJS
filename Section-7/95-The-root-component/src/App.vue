<template>
  <h1>Server Status {{ status }}</h1>
</template>

<script>
export default {
  // The "data" option should be a function that
  // returns a per-instance value in component definitions.
  //   data: {
  //     status: "Critical"
  //   },

  // data must be a function
  data: function() {
    return {
      status: "Critical"
    };
  }
};
</script>

<style>
</style>
