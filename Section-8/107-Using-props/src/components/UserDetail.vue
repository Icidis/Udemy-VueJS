<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
    </div>
</template>

<script>
export default {
    // Array of each property that can be passed to this component,
    // This will automatically create a name property similar to how you do it in data
    props: ['name'],
    data: function() {
        return {
            name: ''
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
