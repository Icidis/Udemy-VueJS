// To provide data to a component, you need to use a function
Vue.component('my-component', {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }}</p>'
});

new Vue({
    el: '#app'
});