var vm1 = new Vue({
    el: "#app",
    data: {
        title: "The VueJS Instance 1",
    }
});

var vm2 = new Vue({
    el: "#app2",
    data: {
        title: "The VueJS Instance 2",
    },
    methods: {
        changeInstanceOneTitle: function() {
            vm1.title = "Title changed from Instance 2"
        }
    }
});