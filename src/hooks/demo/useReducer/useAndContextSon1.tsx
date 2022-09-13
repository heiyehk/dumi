import { ObjectInfoContext } from '@/store/reducerStateAndContext';
import React from 'react';
import { useContext } from 'react';

const DemoUseAndContextSon1 = () => {
  const { dispatch } = useContext(ObjectInfoContext);
  return (
    <div>
      <div>
        <button onClick={() => {
          dispatch({
            type: 'aaa',
            payload: {
              userName: 'test123',
              test: 123
            }
          });
        }}>
          调整数据
        </button>
      </div>
    </div>
  );
};

export default DemoUseAndContextSon1;
