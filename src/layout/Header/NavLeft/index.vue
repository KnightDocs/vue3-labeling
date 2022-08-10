<script setup>
import logo from "@/assets/logo.svg";
</script>
<template>
  <div class="left">
    <img :src="logo" alt="logo" />
    <h3>Vue3 Labeling</h3>
  </div>
</template>
<style lang="scss">
.left {
  display: flex;
  align-items: center;
  img {
    margin-right: 30px;
  }
  h3 {
    color: #fff;
    margin: 0;
  }
}
</style>
