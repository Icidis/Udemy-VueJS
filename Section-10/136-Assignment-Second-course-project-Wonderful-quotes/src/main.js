import Vue from 'vue'
import App from './App.vue'

export const myEventBus = new Vue({
  methods: {
    addQuote(quote) {
      this.$emit('quoteAdded', quote);
    },
    deleteQuote(quote) {
      this.$emit('quoteDelete', quote);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
