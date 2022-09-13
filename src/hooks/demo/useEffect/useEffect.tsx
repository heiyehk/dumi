import React, { useState, useEffect } from 'react';
import RedoRender from '@/components/RedoRender';

const DemoUseEffect = () => {
  const [count, setCount] = useState(0);
  let interval = setInterval(() => {
    console.log('interval')
  }, 1000);

  useEffect(() => {
    console.log('useEffect start', 'interval start');
    return () => {
      clearInterval(interval);
      console.log('useEffect clear', 'interval clear');
    };
  }, [count]);

  return (
    <div>
      <div>{count} </div>
      <RedoRender />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>

    </div>
  );
};

export default DemoUseEffect;
