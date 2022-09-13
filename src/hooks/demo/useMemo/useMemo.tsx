import RedoRender from '@/components/RedoRender';
import React, { useMemo, useState } from 'react';
import DemoUseMemoSon from './useMemoSon';

const DemoUseMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('test');

  const data = useMemo(() => {
    return name;
  }, [name]);

  return (
    <div>
      <div>count: {count}</div>
      <RedoRender />
      <DemoUseMemoSon data={data} />
      <div>
        <button onClick={() => {
          setCount(count + 1);
        }}>按钮</button>
      </div>
    </div>
  );
};

export default DemoUseMemo;
