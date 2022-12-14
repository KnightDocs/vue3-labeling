import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import store from "./store";
import "@/style/reset.css";
import "ant-design-vue/dist/antd.css";

createApp(App).use(Antd).use(store).use(router).mount("#app");
