<template>
  <div class="col-sm-3" @click="deleteQuote">
    <div class="panel panel-default">
      <div v-if="quoteData" class="panel-body quote-info">{{ quoteData.message }}</div>
    </div>
  </div>
</template>
<script>

import { myEventBus } from "./../main";

export default {
  props: {
    quoteData: Object
  },
  methods: {
    deleteQuote() {
      myEventBus.deleteQuote(this.quoteData);
    }
  }
};
</script>
<style scoped>
.quote-info {
  font-size: 24px;
  font-style: italic;
  font-family: cursive;
  cursor: grab;
}

.quote-info:hover {
  background-color: crimson;
}
</style>
