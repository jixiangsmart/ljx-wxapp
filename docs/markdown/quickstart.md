# 快速上手

### 背景知识

使用 Weapp Material 前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 步骤一 通过 npm 安装

> 使用 npm 构建前，请先阅读微信官方的 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```bash
# 通过 npm 安装
npm i @webuy/weapp -S --production

# 通过 yarn 安装
yarn add @webuy/weapp --production

### 步骤二 修改 app.json

将 app.json 中的 `"style": "v2"` 去除，小程序的[新版基础组件](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。

### 步骤三 修改 project.config.json

开发者工具创建的项目，`miniprogramRoot` 默认为 `miniprogram`，`package.json` 在其外部，npm 构建无法正常工作。

需要手动在 `project.config.json` 内添加如下配置，使开发者工具可以正确索引到 npm 依赖的位置。

```json
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
}
```
注意： 由于目前新版开发者工具创建的小程序目录文件结构问题，npm构建的文件目录为miniprogram_npm，并且开发工具会默认在当前目录下创建miniprogram_npm的文件名，所以新版本的miniprogramNpmDistDir配置为'./'即可

### 步骤四 构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，并勾选 **使用 npm 模块** 选项，构建完成后，即可引入组件。

<img style="width: 500px;" src="https://img.yzcdn.cn/public_files/2019/08/15/fa0549210055976cb63798503611ce3d.png" />

### 示例工程

我们提供了一个[示例工程](https://github.com/webuy-ui/webuy-demo)，示例工程会帮助你了解如下内容：

- 基于 Weapp Material 搭建小程序应用
- 样式覆盖方案

## 使用

### 引入组件

以 更新用户头像昵称 组件为例，只需要在`app.json`或`index.json`中配置 update-user-info 对应的路径即可。

所有组件文档中的引入路径均以 npm 安装为例，如果你是通过下载源代码的方式使用 @webuy/weapp，请将路径修改为项目中 @webuy/weapp 所在的目录。

```json
// 通过 npm 安装
// app.json
"usingComponents": {
  "webuy-update-user-info": "@webuy/weapp/update-user-info/index"
}
```

```json
// 通过下载源码使用 es6版本
// app.json
"usingComponents": {
  "webuy-update-user-info": "path/to/@webuy/weapp/dist/update-user-info/index"
}
```

```json
// 通过下载源码使用 es5版本
// app.json
"usingComponents": {
  "webuy-update-user-info": "path/to/@webuy/weapp/lib/update-user-info/index"
}
```

### 使用组件

引入组件后，可以在 wxml 中直接使用组件

```xml
<webuy-update-user-info button-bgc="blue"></webuy-update-user-info>
```

## 其他

### 在开发者工具中预览示例小程序

```bash

# 将项目克隆到本地 ljx
git clone git@github.com:youzan/webuy-weapp.git

# 安装项目依赖
cd webuy-weapp && npm install

# 执行组件编译
npm run dev

```

接着打开微信开发者工具，导入`example`目录的项目就可以预览示例了。
