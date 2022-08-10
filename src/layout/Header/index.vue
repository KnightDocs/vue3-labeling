<script setup>
import NavLeft from "./NavLeft";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";
</script>
<template>
  <div class="header">
    <NavLeft />
    <NavCenter />
    <NavRight />
  </div>
</template>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  color: #fff;
  background-color: $p-color;
}
</style>
