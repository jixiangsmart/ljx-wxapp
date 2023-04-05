export default {
  name: 'vant-weapp',
  build: {
    srcDir: 'packages',
    site: {
      publicPath: './',
    },
  },
  site: {
    title: 'Weapp Material',
    description: '鲸灵小程序物料库',
    logo: 'https://cdn.webuy.ai/static/lib/resource/2023/03/28/1679995108357_7663.png',
    simulator: {
      // 小程序体验码下载图片地址
      url: 'https://cdn.webuy.ai/static/lib/resource/2023/03/29/1680102125429_8032.jpeg',
    },
    links: [
      {
        logo: 'https://cdn.webuy.ai/static/lib/resource/2023/03/29/1680098943068_6667.png',
        url: 'https://www.baidu.com',
      },
    ],
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
          {
            path: 'changelog',
            title: '更新日志',
          },
          {
            path: 'custom-style',
            title: '样式覆盖',
          },
          {
            path: 'theme',
            title: '定制主题',
          },
        ],
      },
      {
        title: '物料中心',
        items: [
          {
            path: 'update-user-info',
            title: '更新用户头像昵称',
          },
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
        ],
      },
    ],
  },
};
