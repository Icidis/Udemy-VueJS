new Vue({
    el: "#app",
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