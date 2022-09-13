import { ObjectInfoContext } from '@/store/reducerStateAndContext';
import React from 'react';
import { useContext } from 'react';

const DemoUseAndContextSon = () => {
  const { state } = useContext(ObjectInfoContext);
  return (
    <div>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};

export default DemoUseAndContextSon;
