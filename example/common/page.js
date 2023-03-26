export default function (options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'Weapp Material 组件库演示',
      };
    },
    ...options,
  });
}
