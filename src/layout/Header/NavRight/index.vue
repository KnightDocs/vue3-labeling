<script setup>
import {
  FileImageOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
const checked = ref(false);
const checked2 = ref(false);

const isFullScreen = ref(false);
const switchfullScreen = () => {
  //获取到整个html
  let element = document.documentElement;
  //如果不是全屏
  if (isFullScreen.value) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen();
    }
  }
  isFullScreen.value = !isFullScreen.value;
};
</script>
<template>
  <ul class="nav-right">
    <li>
      <a-switch v-model:checked="checked" size="small" style="width: 40px" />
      <span>十字线</span>
    </li>
    <li>
      <a-switch v-model:checked="checked2" size="small" style="width: 40px" />
      <span>标注结果</span>
    </li>
    <li>
      <file-image-outlined style="font-size: 20px" />
      <span>快照</span>
    </li>
    <li @click="switchfullScreen">
      <fullscreen-outlined v-if="!isFullScreen" style="font-size: 20px" />
      <fullscreen-exit-outlined v-else style="font-size: 20px" />
      <span>全屏</span>
    </li>
  </ul>
</template>
<style lang="scss">
.nav-right {
  display: flex;
  margin-bottom: 0;
  height: 100%;
  font-size: 12px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
