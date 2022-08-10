<template>
  <div class="app-main">
    <div class="left">
      <canvas id="my-canvas"></canvas>
    </div>
    <div class="right">panel</div>
  </div>
</template>
<style lang="scss">
.app-main {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 60px;
  left: 60px;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  color: #fff;
  background-color: #eaeaea;
  .left {
    flex: 1;
  }
  .right {
    width: 300px;
    background-color: $l-color;
  }
}
#my-canvas {
  width: 100%;
  height: 100%;
}
</style>
