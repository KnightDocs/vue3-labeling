const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: process.env.NODE_ENV === "production", // 是否将组件中的 css 提取至一个独立的 css 文件中，生产环境下是 true，开发环境下是 false
    sourceMap: false, // 关闭 css 的source map
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/style/_variable.scss";
          @import "~@/style/_mixins.scss";
          @import "~@/style/base.scss";
        `,
      },
    },
  },
});
