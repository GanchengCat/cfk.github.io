import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "猫之国度",
  description: "Meowhuan的服务器官网",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});