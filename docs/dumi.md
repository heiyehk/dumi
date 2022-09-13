---
title: Dumi基础使用
toc: menu
---

## 自定义页面
``` yaml
---
title: 自定义页面名称
nav:
  path: /自定义导航路由
  title: 自定义导航名称
  order: 控制导航顺序，数字越小越靠前，默认以路径长度和字典序排序
group:
  path: /自定义分组路由，注意，分组路由 = 导航路由 + 自己
  title: 自定义分组名称
  order: 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
---
```

## jsx | pure 渲染源代码
<pre lang="markdown">
```jsx | pure
// 我不会被渲染为 React 组件
```
</pre>

## jsx | preview 代码被动渲染
<pre lang="markdown">
```jsx | preview
// 我会被渲染为 React 组件
```
```jsx
// 在默认情况下，我会被渲染为 React 组件
// 在开启代码块被动渲染的情况下，我不会被主动渲染为 React 组件，除非添加 preview 修饰符
```
</pre>

## 外部code
``` html
<code src="/path/to/complex-demo.tsx"></code>
```

## 控制demo渲染
<pre lang="ts">
```jsx
/**
 * transform: true                                  // position: fixed不会飞出去
 * background: '#f6f7f9'                            // 背景色
 * compact: true                                    // 取消dumi的包裹器内边距
 * title: 我是标题
 * desc: 我是简介，我可以用 `Markdown` 来编写
 * inline: true                                     // 不会显示包裹器
 * debug: true                                      // 只在开发环境下显示
 * iframe: true                                     // 设置为数值可控制 iframe 高度
 */

import React from 'react';
```
</pre>

## 内置组件
``` tsx | pure
<Alert type="info">
  注意，内部暂时只能编写 HTML
</Alert>
```

## Badge
```markdown
##### 标签测试 <Badge>Hello</Badge>
```

##### 标签测试 <Badge>Hello</Badge>

```html
<!-- 引入全量的 Markdown 文件内容 -->
<embed src="/path/to/some.md"></embed>

<!-- 根据行号引入指定行的 Markdown 文件内容 -->
<embed src="/path/to/some.md#L1"></embed>

<!-- 根据行号引入部分 Markdown 文件内容 -->
<embed src="/path/to/some.md#L1-L10"></embed>

<!-- 根据正则引入部分 Markdown 文件内容 -->
<embed src="/path/to/some.md#RE-/^[^\r\n]+/"></embed>
```
