import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "游玩须知",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "公告",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["公告"],
      },
      {
        text: "成员列表",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["成员列表"],
      },
    ],
  },
  {
    text: "加入群聊",
    icon: "comment",
    link: "https://qm.qq.com/q/EBRy3q9596",
  },
]);
