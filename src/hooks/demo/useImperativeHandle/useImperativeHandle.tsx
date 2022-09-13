import RedoRender from '@/components/RedoRender';
import React from 'react';
import { useRef } from 'react';
import DemoUseImperativeHandleSon, { IDemoUseImperativeHandleSonRefType } from './Son';

const DemoUseImperativeHandle = () => {
  const demoUseImperativeHandleSonRef = useRef<IDemoUseImperativeHandleSonRefType>();

  const addHandle = () => {
    demoUseImperativeHandleSonRef.current?.setCount(demoUseImperativeHandleSonRef.current?.count + 1);
  }

  return (
    <div>
      <DemoUseImperativeHandleSon ref={demoUseImperativeHandleSonRef as any} />
      <RedoRender />
      <button onClick={addHandle}>add</button>
    </div>
  );
};

export default DemoUseImperativeHandle;
