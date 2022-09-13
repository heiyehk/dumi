---
title: useContext
toc: menu
---

## demo

1. 要先创建createContext
2. 在圈定的范围内，传入读操作和写操作对象，然后可以使用上下文
3. 最后使用useContext

使用useContext在改变一个数据时，是通过自己逐级查找对比改变的数据然后渲染，而不是通过数据响应式来监控变量的。

<code src="./demo/useContext/useContext.tsx" />