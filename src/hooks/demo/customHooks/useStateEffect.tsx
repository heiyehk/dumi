import React from 'react';
import useStateEffect from '../../hooks/useStateEffect';

const DemoUseStateEffect = () => {
  const [count, setCount] = useStateEffect(0);

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={() => {
          setCount(count + 1, (n, o, d) => {
            console.log('newValue: ', n, '\r\noldValue: ', o, '\r\ndefaultValue: ', d);
          });
        }}>add</button>
      </div>
    </div>
  );
};

export default DemoUseStateEffect;
