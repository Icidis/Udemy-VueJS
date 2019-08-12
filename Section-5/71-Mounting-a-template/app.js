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


// This will put the h1 tag into the app2 div, this is an html template (User control)
var vm2 = new Vue({
    template: '<h1>This html is injected by VueJS using a template!</h1>'
});

// vm2.$mount('#app2');

//Alternative to the above and is uncommon
vm2.$mount();
document.getElementById('app2').appendChild(vm2.$el);