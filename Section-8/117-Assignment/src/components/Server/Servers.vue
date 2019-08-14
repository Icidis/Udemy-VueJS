<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <template v-for="item in servers">
                <server-item :serverData="item"></server-item>
            </template>
        </ul>
    </div>
</template>

<script>
    import ServerItem from './Server.vue';

    export default {
        components: {
            'server-item' : ServerItem,
        },
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                ]
            }
        }
    }
</script>

<style>

</style>
