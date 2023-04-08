# 更新用户头像昵称

### 介绍

用户修改用户头像昵称

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "webuy-update-user-info": "@webuy/weapp/update-user-info/index"
}
```

## 代码演示

### 示例

```html
  <webuy-update-user-info 
    button-bgc="#D90000"
    avatar-url="{{ avatarUrl }}"
    nick-name="{{ nickName }}"
    bind:uploadavatar="uploadAvatar"
    bind:submit="formSubmit"
  />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| nick-name | 默认昵称 | _string_ | `海鸥` |
| avatar-url | 默认头像 | _string_ | `Y` |
| button-bgc | 按钮类型颜色 | _string_ | `#D90000` |

### Events

| 参数 | 说明 | 回调参数 |
| --- | --- | --- |
| bind:submit | 保存 | `{e}` |
| bind:uploadavatar | 选择图片成功 | `{e}` |
