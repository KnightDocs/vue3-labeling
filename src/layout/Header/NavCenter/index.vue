<script setup>
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons-vue";
</script>
<template>
  <div class="nav-center">
    <caret-left-outlined class="icon" title="上一张" />
    <div class="info">
      <div class="info-top">football.jpg</div>
      <div class="info-bottom">1 / 10</div>
    </div>
    <caret-right-outlined class="icon" title="下一张" />
  </div>
</template>
<style lang="scss">
.nav-center {
  display: flex;
  align-items: center;
  .icon {
    cursor: pointer;
    &:hover {
      transform: scale(1.25);
      transition: 0.2s;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
  }
}
</style>
