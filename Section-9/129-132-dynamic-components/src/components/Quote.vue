<template>
    <div>
        <!-- This slot is a reserved vuejs keyword and will render any html inbetween the component element tags -->
        <div class="title">
            <slot name="title"></slot>
            <span style="color: blue;"><slot name="subtitle">Default slot content</slot></span>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>        
        </div>
        <div>
            <slot></slot>        
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div {
        border: 1px solid #cccccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: red
    }

    .title {
        font-style: italic;
    }
</style>