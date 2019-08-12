// var data = { status: 'Critical' };

// To provide data to a component, you need to use a function
Vue.component('my-component', {
    data: function () {
        // This is shared across multiple instances of the component
        // return data;
        return {
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function () {
            this.status = 'Normal';
        }
    }
});

new Vue({
    el: '#app'
});