<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <!-- Data binding happens in the parent even though this is slotted html -->
                   <!-- Styling of the h2 tag will come from the component and not the parent -->
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p slot="content">A wonderful Quote</p>
                   <p>Default Slot</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'The data bound quote'
            }
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style scoped>

</style>
