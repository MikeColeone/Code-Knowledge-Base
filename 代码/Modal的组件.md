```js



设计一个弹窗，弹窗可以通过配置决定按钮的数量和功能：
[
    {
      text: '操作',
      onClick: () => {},
    },
    {
      text: '一秒后关闭',
      onClick: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('一秒后关闭');
            resolve();
          }, 1000);
        });
      },
    },
    {
      text: '操作失败',
      onClick: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('操作失败');
            reject();
          }, 1000);
        });
      },
    },
  ]

```

以上配置，第一个按钮点击后立刻关闭弹窗，第二个点击一秒后关闭弹窗，第三个点击不会关闭弹窗
