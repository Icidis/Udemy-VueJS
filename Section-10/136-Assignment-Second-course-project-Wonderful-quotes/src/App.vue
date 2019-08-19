<template>
  <div class="container">
    <div class="row">
      <quote-progress :data-total-quotes="totalQuotes"></quote-progress>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <quote-add :data-quotes="quotes"></quote-add>
      </div>
      <div class="col-md-4"></div>
    </div>
    <hr />
    <div class="row">
      <template v-if="quotes.length > 0" v-for="quote in quotes">
        <quote-info :quoteData="quote"></quote-info>
      </template>
    </div>
    <hr />
    <div class="row">
      <div class="alert alert-info" style="text-align: center" role="alert">Info: Click on Quote to delete it</div>
    </div>
  </div>
</template>

<script>
import { myEventBus } from "./main";
import QuoteInfo from "./components/QuoteInfo.vue";
import QuoteProgress from "./components/QuoteProgress.vue";
import QuoteAdd from "./components/QuoteAdd.vue";

export default {
  data: function() {
    return {
      totalQuotes: 0,
      quotes: []
    };
  },
  created() {
    var me = this;
    myEventBus.$on("quoteAdded", data => {
      if (me.totalQuotes < 10) {
        me.quotes.push(data);
        me.totalQuotes = me.quotes.length;
      }else {
        return alert('Please delete some quotes');
      }
    });

    myEventBus.$on("quoteDelete", data => {
      var index = me.quotes.indexOf(data);
      if (index > -1) {
        me.quotes.splice(index, 1);
        me.totalQuotes = me.quotes.length;
      }
    });
  },
  components: {
    "quote-info": QuoteInfo,
    "quote-progress": QuoteProgress,
    "quote-add": QuoteAdd
  }
};
</script>

<style>
</style>
