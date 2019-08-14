<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
    </div>
</template>

<script>
export default {
    // Array of each property that can be passed to this component,
    // This will automatically create a name property similar to how you do it in data
    props: ['myName'],
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
