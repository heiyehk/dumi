import RedoRender from '@/components/RedoRender';
import React, { useCallback, useState } from 'react';
import DemoUseCallbackSon from './useCallbackSon';

const DemoUseCallback = () => {
  const [count, setCount] = useState(0);
  const [n, setN] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <RedoRender />
      <DemoUseCallbackSon count={count} onClick={handleClick} />
      <input
        type="number"
        value={n}
        onChange={e => {
          setN(parseInt(e.target.value));
        }}
      />
    </div>
  );
};

export default DemoUseCallback;
