<template>
  <div>
    <h1>Quotes Added</h1>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="10"
        v-bind:style="{ width: dataTotalQuotes * 10 + '%'}"
      >{{ dataTotalQuotes }} / 10</div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        dataTotalQuotes: 0
    },
};
</script>
<style scoped>

</style>