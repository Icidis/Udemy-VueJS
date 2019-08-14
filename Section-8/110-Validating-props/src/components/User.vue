<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button v-on:click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- Hard code name being passed -->
                <!-- <app-user-detail name="ryan"></app-user-detail> -->
                <!-- Dynamic value -->
                <app-user-detail v-bind:myName="name"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function() {
            return {
                name: 'John'
            }
        },
        methods: {
            changeName() {
                this.name = 'Smith'
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
