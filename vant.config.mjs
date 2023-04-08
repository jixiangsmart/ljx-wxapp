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
      url: 'https://cdn.webuy.ai/static/lib/resource/2023/04/08/1680958328819_1915.png',
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
    ],
  },
};
