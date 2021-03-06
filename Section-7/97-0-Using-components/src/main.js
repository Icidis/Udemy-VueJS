import Vue from 'vue'
import App from './App.vue'

// Importing the Home.vue file as Home
import Home from './Home.vue'

// Registering the Home import as a component
// This allows youi to use the following in html
// <app-server-status></app-server-status>
Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
