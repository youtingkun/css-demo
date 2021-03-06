// 配置文件的入口文件
module.exports = {
  title: "css", // 网站的标题，它将会被用作所有页面标题的前缀。
  description: "vuepressdemo", // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    // 配置icon，注意public里面的资源默认会放在根目录，并且引用路径要为/favicon.ico，不能为./favicon.ico
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  ],
  themeConfig: {
    // 顶部导航条相关配置
    nav: [
      //    { text: '首页', link: '/' },
      { text: "github ", link: "https://github.com/youtingkun/" },
    ],
    // 侧边栏的配置
    sidebar: {
      "/": [
        {
          title: "居中",
          collapsable: false, //是否能够折叠
          children: [
            ["/center/horizontal-center", "水平居中"],
            ["/center/vertical-center", "垂直居中"],
            ["/center/horizontal-vertical-center", "水平垂直居中"],
          ],
        },
        {
          title: "display",
          collapsable: false,
          children: [["/display/block-inline", "行内元素与块元素"]],
        },
        {
          title: "postion",
          collapsable: false,
          children: [
            ["/postion/postion", "定位"],
            ["/postion/z-index", "z-index"],
          ],
        },
        {
          title: "select",
          collapsable: false,
          children: [["/select/select", "选择器"]],
        },
        {
          title: "动画",
          collapsable: false,
          children: [
            ["/animation/animation", "animation"],
            ["/animation/transition", "transition"],
            ["/animation/transform", "transform"],
            ["/animation/example", "example"],
          ],
        },
        {
          title: "canvas",
          collapsable: false,
          children: [["/canvas/canvas", "canvas"]],
        },
      ],
    },
  },
};
