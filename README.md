<p align="center">
  <img alt="logo" src="https://cdn.webuy.ai/static/lib/resource/2023/03/28/1679995108357_7663.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">轻量、可靠的小程序 UI 组件库</h3>
<p align="center">
  &nbsp;
  🌈 <a href="https://youzan.github.io/vant-weapp">文档网站（GitHub）</a>
</p>

---

### 介绍

Weapp Material 是一个**鲸灵小程序物料库**。


## 预览

文档网站右侧预览小程序体验二维码，体验组件库示例；

## 使用之前

使用 Webuy Weapp 前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 方式一. 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
# 通过 npm 安装
npm i @webuy/weapp -S --production

# 通过 yarn 安装
yarn add @webuy/weapp --production


## 使用组件

以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "webuy-update-user-info": "/path/to/webuy-weapp/dist/webuy-update-user-info/index"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<webuy-update-user-info button-bgc="blue"></webuy-update-user-info>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，把`webuy-weapp/example`目录添加进去就可以预览示例了。


