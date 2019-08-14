import Vue from 'vue'
import App from './App.vue'

// Create it before you register the main vue application
export const myEventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})