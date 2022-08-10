<template>
  <div class="home">{{ message }}</div>
</template>
<script setup name="Home">
import { ref } from "vue";
const message = ref("hello world");
</script>
<style>
.home {
  height: 100%;
}
</style>
