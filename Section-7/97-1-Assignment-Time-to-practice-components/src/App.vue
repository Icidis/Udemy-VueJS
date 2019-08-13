<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-server-list></app-server-list>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/shared/AppHeader.vue";
import AppFooter from "./components/shared/AppFooter.vue";
import AppServerList from "./components/servers/AppServerList.vue";
import AppServerDetails from "./components/servers/AppServerDetails.vue";

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "app-server-list": AppServerList,
    "app-server-details": AppServerDetails
  }
};
</script>

<style>
</style>
