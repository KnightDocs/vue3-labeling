<script setup>
import {
  ImportOutlined,
  DownloadOutlined,
  PlusOutlined,
  TagsOutlined,
  BorderOutlined,
  SettingFilled,
} from "@ant-design/icons-vue";

const style = {
  fontSize: "1.5em",
};
</script>
<template>
  <div class="sidebar">
    <ul class="top-ul">
      <li>
        <import-outlined :style="style" title="打开文件" />
      </li>
      <li>
        <download-outlined :style="style" title="生成 json 到本地" />
      </li>
    </ul>
    <div class="line"></div>
    <ul class="bottom-ul">
      <li>
        <plus-outlined :style="style" title="图片拖拽" />
      </li>
      <li>
        <tags-outlined :style="style" title="标签创建" />
      </li>
      <li>
        <border-outlined :style="style" title="矩形工具" />
      </li>
      <li>
        <setting-filled :style="style" title="多边形工具" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.sidebar {
  width: 60px;
  height: calc(100% - 60px);
  color: #fff;
  background-color: $d-color;
  ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    span {
      cursor: pointer;
    }
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: #eaeaea;
  }
  .bottom-ul > li {
    margin: 3px;
    border-radius: 2px;
    &:hover {
      background-color: $l-color;
      transition: 200ms;
    }
  }
}
</style>
