import RedoRender from '@/components/RedoRender';
import { number, reducer } from '@/store/reducerState';
import React, { useReducer } from 'react';

const DemoUseReducer = () => {
  const [num, dispatch] = useReducer(reducer, number)
  return (
    <div>
      <RedoRender />
      <div>num:{num}</div>
      <div>
        <button onClick={() => dispatch('add')}>add</button>
        <button onClick={() => dispatch('subtract')}>subtract</button>
      </div>
    </div>
  );
};

export default DemoUseReducer;
