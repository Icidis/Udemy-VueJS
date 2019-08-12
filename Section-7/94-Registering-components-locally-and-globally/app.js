// var data = { status: 'Critical' };

// This is a global registered component
Vue.component('my-component', {
    data: function () {
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

//This registers the component locally
var cmp = Vue.component('ABC', {
    data: function () {
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
    el: '#app',
    // Specify which local components can be used in this Vue instance
    components: {
        'my-local-component': cmp
    }
});

new Vue({
    el: '#app2',
    // Can use a different selector for the same component
    components: {
        'local-cmp': cmp
    }
});