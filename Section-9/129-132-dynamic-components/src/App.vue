<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent ='app-quote'">Quote</button>
                <button @click="selectedComponent ='app-author'">Author</button>
                <button @click="selectedComponent ='app-new'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>

                <!-- Components are created and destoyed -->
                <component :is="selectedComponent">
                    <p>Default content</p>
                </component>

                <!-- // Using keep-alive so components don't get re-created and destoyed -->
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default content</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'The data bound quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style scoped>

</style>
