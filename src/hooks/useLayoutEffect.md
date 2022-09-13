---
title: useLayoutEffect
toc: menu
---

## demo

1. useLayoutEffect和componentDidMount和componentDidUpdate触发时机一致（都在在DOM修改后且浏览器渲染之前）；
2. useLayoutEffect要比useEffect更早的触发执行；
3. useLayoutEffect会阻塞浏览器渲染，切记执行同步的耗时操作。

<code src="./demo/useLayoutEffect/useLayoutEffect.tsx" />

> 除非要修改DOM并且不让用户看到修改DOM的过程，才考虑使用useLayoutEffect，否则应当使用useEffect。  
> 注意：如果只是为了获取DOM属性（或其它get操作），则没必要使用useLayoutEffect，应当使用useEffect。
