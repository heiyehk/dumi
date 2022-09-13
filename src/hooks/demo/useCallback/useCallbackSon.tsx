import RedoRender from '@/components/RedoRender';
import React, { FC } from 'react';

interface IDemoUseCallbackSonProps {
  count: number;
  onClick: () => void;
}

const DemoUseCallbackSon: FC<IDemoUseCallbackSonProps> = ({ count, onClick }) => {
  return (
    <div>
      <RedoRender />
      <h3>{count}</h3>
      <button onClick={onClick}>改变文本</button>
    </div>
  );
};

export default DemoUseCallbackSon;
