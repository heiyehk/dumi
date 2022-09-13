import RedoRender from '@/components/RedoRender';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useState } from 'react';

export interface IDemoUseImperativeHandleSonRefType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const DemoUseImperativeHandleSon = forwardRef<IDemoUseImperativeHandleSonRefType, Record<string, any>>((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      count,
      setCount
    }
  });

  return (
    <div>
      <RedoRender />
      <div>son count: {count}</div>
    </div>
  );
})

export default DemoUseImperativeHandleSon;
