import RedoRender from '@/components/RedoRender';
import React, { FC, memo, useMemo } from 'react';

interface IDemoUseMemoSonProps {
  data: string;
};

const DemoUseMemoSon: FC<IDemoUseMemoSonProps> = memo(({ data }) => {
  return (
    <div>
      <div>child: {data} (不会重新渲染)</div>
      <RedoRender />
    </div>
  );
});

export default DemoUseMemoSon;
