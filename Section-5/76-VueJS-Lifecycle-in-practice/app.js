var vm1 = new Vue({
    data: {
        title: 'See console log for lifecycle',
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    },
    beforeCreate: function() {
        console.log('beforeCreate called.');
    },
    created: function() {
        console.log('created called.');
    },
    beforeMount: function() {
        console.log('beforeMount called.');
    },
    updated: function() {
        console.log('updated called.');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate called.');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy called.');
    },
    destroyed: function() {
        console.log('destoryed called.');
    }
});

// Using mount instead of el: #app, el property is mostly used
vm1.$mount('#app');