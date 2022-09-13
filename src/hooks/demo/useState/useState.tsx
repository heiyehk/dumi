import React, { FormEvent, useState } from 'react';
import RedoRender from '@/components/RedoRender';

const DemoUseState = () => {
  const [inputValue, setInputValue] = useState('');

  const inputChange = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as any).value;
    setInputValue(value)
  };

  const inputReset = () => setInputValue('');

  return (
    <div>
      <RedoRender />
      <div style={{ marginBottom: 10 }}>inputValue: {inputValue}</div>
      <div style={{ marginBottom: 10 }}>
        <input value={inputValue} onInput={inputChange} />
      </div>
      <div>
        <button onClick={inputReset}>重置</button>
      </div>
    </div>
  );
};

export default DemoUseState;
