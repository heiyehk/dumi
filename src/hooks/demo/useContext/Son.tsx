import React from 'react';
import { useContext } from 'react';
import DemoUseContextGrandson from './Grandson';
import { Context } from './useContext';

const DemoUseContextSon = () => {
  const { count, setCount } = useContext(Context)!;

  return (
    <div>
      <div>子组件: {count}</div>
      <div>
        <button onClick={() => {
          setCount(count + 1);
        }}>子组件更改</button>
      </div>
      <DemoUseContextGrandson />
    </div>
  )
};

export default DemoUseContextSon;
