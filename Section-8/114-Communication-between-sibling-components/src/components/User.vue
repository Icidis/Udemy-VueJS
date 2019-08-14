<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button v-on:click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- Listening to events -->
                <app-user-detail 
                    v-bind:myName="name" 
                    v-on:nameWasReset="name = $event"
                    v-bind:resetFn="resetName"
                    :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age = $event"></app-user-edit>
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
                name: 'John',
                age: 27
            }
        },
        methods: {
            changeName() {
                this.name = 'Smith'
            },
            resetName() {
                this.name = 'John';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
