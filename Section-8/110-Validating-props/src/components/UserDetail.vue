<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
    </div>
</template>

<script>
export default {
    // Array of each property that can be passed to this component,
    // This will automatically create a name property similar to how you do it in data
    // props: ['myName'],
    // This will then validate or ensure that it's one or more types.

    // If an invalid type is sent through. E.G 1 a Vue warning will show in the console.
    // Invalid prop: type check failed for prop name "myName". Expected String, got Number.
    props: {
        myName: String,
        // myName: [String, Array]
    },

    // Setting that the property is required
    // props: {
    //     myName: {
    //         type: String,
    //         required: true
    //     }
    // },

    // Setting default values
    // props: {
    //     myName: {
    //         type: String,
    //         default: 'ABC'
    //     }
    // },

    // Setting default values for an object
    // props: {
    //      myName: {
    //          type: Object,
    //          default: function() {
    //              return {
    //                  name: 'ABC'
    //              }
    //          }
    //      }
    //  },

    methods: {
        switchName() {
            //If the myName parameter set by the parent is a boolean or number, this would fail.
            return this.myName.split("").reverse().join("");
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
