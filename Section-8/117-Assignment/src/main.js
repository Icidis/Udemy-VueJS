import Vue from 'vue'
import App from './App.vue'

export const myEventBus = new Vue({
  methods: {
    viewServerDetails(server) {
      this.$emit('serverSelected', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
