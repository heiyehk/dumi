import React, { useState, useLayoutEffect } from 'react';
import RedoRender from '@/components/RedoRender';

const DemoUseLayoutEffect = () => {

  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(`useLayoutEffect - count=${count}`)
    // 耗时的操作
    const pre = Date.now();
    while (Date.now() - pre < 50) { }

    if (count === 0) {
      setCount(10 + Math.random() * 200);
    }
  }, [count]);

  return (
    <div>
      <RedoRender />
      <div onClick={() => setCount(0)}>{count}</div>
    </div>
  );
}

export default DemoUseLayoutEffect;
