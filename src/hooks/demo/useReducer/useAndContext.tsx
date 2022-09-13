import React from 'react';
import { objectInfo, ObjectInfoContext, objectInfoReducer } from '@/store/reducerStateAndContext';
import DemoUseAndContextSon from './useAndContextSon';
import { useReducer } from 'react';
import DemoUseAndContextSon1 from './useAndContextSon1';

const DemoUseAndContext = () => {
  const [state, dispatch] = useReducer(objectInfoReducer, objectInfo)

  return (
    <ObjectInfoContext.Provider value={{ state, dispatch }}>
      <DemoUseAndContextSon />
      <DemoUseAndContextSon1 />
    </ObjectInfoContext.Provider>
  );
};

export default DemoUseAndContext;
