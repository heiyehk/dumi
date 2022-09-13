---
title: useMemo
toc: menu
---

## demo
1. 第一个参数是()=>value
2. 第二个参数是依赖[m,n]
3. 只有当依赖变化时，才会重新计算出新的value
4. 如果依赖不变，那么就重用之前的value
5. 这就类似Vue的computed

<code src="./demo/useMemo/useMemo.tsx" />