---
title: useCallback
toc: menu
---

## demo
- `callback` 是一个函数用于处理逻辑
- `array` 控制 `useCallback` 重新执行的数组， `array` 改变时才会重新执行 `useCallback`
  1. 数组，每次更新都会重新计算
  2. 空数组，只会计算一次
  3. 依赖对应的值，对应的值发生变化重新计算
- `useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`

<code src="./demo/useCallback/useCallback.tsx" />

## useCallback和useMemo的区别
|useCallback|useMemo|
|-|-|
|用于记忆渲染之间的回调函数（引用相等）|用于记忆函数调用之间和渲染之间的函数结果或值|
|返回一个记忆函数|返回一个记忆值|
|依赖关系发生变化时的变化|依赖关系发生变化时的变化|

## 使用场景
并非所有函数都需要被记住，有太多的 `useCallback` 对于你的应用程序来说可能是昂贵的，因为 `React` 必须在每次组件重新渲染时将以前的依赖项与值进行比较。

当子组件不应不必要地重新呈现至关重要时，应用 `useCallback` ，因为在呈现过程中重新定义了回调函数 `prop`。`useCallback` 将使 `React` 记住这个回调函数，以便在渲染之间返回相同的函数实例。