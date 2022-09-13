## lazy
- 代码分割，减少打包后的体积。异步渲染，加快渲染速度。
- 需要配合 `React.Suspense` 组件来使用，可以定义 `异步chunk` 加载未完成之前的`UI`显示  

<code src="./demo/lazy/lazy.tsx" />