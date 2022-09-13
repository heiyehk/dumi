import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import DemoUseContextSon from './Son';

export const Context = createContext<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
} | null>(null);

const DemoUseContext = () => {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ count, setCount }}>
      <DemoUseContextSon />
    </Context.Provider>
  )
};

export default DemoUseContext;