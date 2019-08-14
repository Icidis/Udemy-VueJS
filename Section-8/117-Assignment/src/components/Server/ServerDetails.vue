<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!serverDetails">Please select a Server</p>
        <p v-else>Server #{{ serverDetails.id }} selected, Status: {{ serverDetails.status }}</p>
        <hr>
        <button @click="updateStatus">Change to Normal</button>
    </div>

</template>

<script>
import { myEventBus } from '../../main';

export default {
    created() {
        console.log('create');
        myEventBus.$on('serverSelected', (data) => {
            console.log('event hit');
            this.serverDetails = data;
        })
    },
    data: function() {
        return {
            serverDetails : null
        }
    },
    methods: {
        updateStatus() {
            this.serverDetails.status = 'Normal';
        }
    }
}
</script>

<style>

</style>
