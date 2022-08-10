<template>
  <div class="layout">
    <Header></Header>
    <Sidebar></Sidebar>
    <AppMain></AppMain>
  </div>
</template>
<script setup>
import Header from "./Header/index.vue";
import Sidebar from "./Sidebar/index.vue";
import AppMain from "./AppMain/index.vue";
</script>
<style>
.layout {
  height: 100%;
}
</style>
