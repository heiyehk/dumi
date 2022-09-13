---
title: useImperativeHandle
toc: menu
---

## demo
`useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值。
在大多数情况下，应当避免使用 `ref` 这样的命令式代码。
`useImperativeHandle` 应当与 `forwardRef` 一起使用。

<code src="./demo/useImperativeHandle/useImperativeHandle.tsx" />

## 示例
``` ts
/** ref type */
export interface RefPropsType {

}

/** props type */
interface PropsType {

}

/** son */
forwardRef<RefPropsType, PropsType>((ref, props) => {
  useImperativeHandle(ref, () => {
    count: 0,
    countHandle: () => {}
  });
});

/** father */
const sonRef = useRef<RefPropsType>();

sonRef.current?.count; // 0
sonRef.current?.countHandle();
```