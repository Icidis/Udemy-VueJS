<template>
  <div>
    <div class="form-group">
      <label class="form-label">Quote</label>
      <textarea class="form-control" v-model="message" rows="3"></textarea>
    </div>
    <button class="btn btn-success" @click="addQuote">Add Quote</button>
    {{ message }}
  </div>
</template>
<script>
import { myEventBus } from "./../main";

export default {
  data: function() {
    return {
      message: ""
    };
  },

  methods: {
    addQuote() {
      var msg = {
        message: this.message
      };
      myEventBus.addQuote(msg);
      this.message = "";
    }
  }
};
</script>
<style scoped>
</style>