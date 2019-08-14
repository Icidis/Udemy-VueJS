<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button v-on:click="resetName">Reset name</button>
        <button v-on:click="resetFn">Reset name</button>
    </div>
</template>

<script>
export default {
    props: {
        myName: String,
        // This states that the resetFn prop is a Function (callback)
        resetFn: Function,
        userAge: Number
    },

    methods: {
        switchName() {
            //If the myName parameter set by the parent is a boolean or number, this would fail.
            return this.myName.split("").reverse().join("");
        },
        resetName() {
            this.myName = 'Default name';
            // Publish event with value
            this.$emit('nameWasReset', this.myName);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
