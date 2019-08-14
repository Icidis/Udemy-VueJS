<template>
    <li class="list-group-item" style="cursor: pointer" @click="showServerDetails">
        Server #{{ serverData.id }}
    </li>
</template>
<script>

import { myEventBus } from '../../main';

export default {
    name: "server-item",
    props: {
        serverData : Object
    },
    methods: {
        showServerDetails() {
            console.log('ViewServerDetails');
            myEventBus.viewServerDetails(this.serverData);
        }
    }
}
</script>