import React from 'react';
import { useContext } from 'react';
import { Context } from './useContext';

const DemoUseContextGrandson = () => {
  const { count, setCount } = useContext(Context)!;

  return (
    <div style={{ marginTop: 20 }}>
      <div>孙组件: {count}</div>
      <div>
        <button onClick={() => {
          setCount(count + 1);
        }}>孙组件更改</button>
      </div>
    </div>
  )
};

export default DemoUseContextGrandson;
