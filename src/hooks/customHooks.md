---
title: 自定义hooks
toc: menu
---

## useStateEffect
根据 `useState` 改造的 `useStateEffect`，使用方式和 `useState` 保持一致，不同的是改变状态的数组第二个函数接收 `2个` 参数。

`setState(value, (newValue, oldValue, defaultValue) => void)`
- 第一个传入一个新的状态
- 第二个参数是一个 `callback函数`，函数返回分别为 `更新后的值`、 `旧的值`、 `默认的原始值`

<code src="./demo/customHooks/useStateEffect.tsx" />

## useCountDown
拥有 `启动`， `清空`， `暂停`， `继续` 等控制的倒计时功能，需要用户手动去触发 `clear` 倒计时组件。支持启用多个。

常用于发送验证码功能，支持手动定制倒计时文案。

``` tsx | pure
useCountDown(60, '{count}倒计时');

// or

useCountDown({
  startCount: 60,
  defaultText: '发送验证码',
  paddingText: '{count}可重新发送'
});
```
<code src="./demo/customHooks/useCountDown.tsx" />

## useHandle

对函数加入了 `loading` 的属性返回，手动触发请求，可以控制触发后是否可以继续触发。

<code src="./demo/customHooks/useHandle.tsx" />