// Register a component as the above only does it for one instance,
// Needs to be registered first
Vue.component('hello3', {
    template: '<h1>Hello 3 from a registered VueJS component.</h1>'
});

var vm1 = new Vue({
    data: {
        title: jsTitleFromPage,
    },
    methods: {
        changeButtonTitle: function() {
            // Access the button and change any property on the element.
            // This is not reactive and may be overwritten by VueJS later
            console.log(this.$refs.btnShow.innerText = 'Text changed using $refs')
        }
    }
});

// Using mount instead of el: #app, el property is mostly used
vm1.$mount('#app');

var vm2 = new Vue({
    // This will only do it for the first instance of <hello></hello>
    el: 'hello',
    template: '<h1>This html is injected by VueJS looking for a component called "hello"</h1>'
});

var vm3 = new Vue({
    // This will only do it for the first instance of <div class="hello2"></div>
    el: '.hello2',
    template: '<h1>This html is injected by VueJS looking for a div component with a class of "hello2"</h1>'
});