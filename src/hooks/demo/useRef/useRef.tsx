import React, { FormEvent, useLayoutEffect, useRef, useState } from 'react';
import RedoRender from '@/components/RedoRender';
import { getAccessType } from '@/utils';

const DemoUseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputRefCurrentState, setInputRefCurrentState] = useState(getAccessType(inputRef.current));

  /** 如果使用 `useEffect` 会导致节点渲染时闪烁 */
  useLayoutEffect(() => {
    setInputRefCurrentState(getAccessType(inputRef.current));
  }, [inputRef.current]);

  return (
    <div>
      <RedoRender />
      <div>当前类型：{inputRefCurrentState}</div>
      <div>
        <input ref={inputRef} />
      </div>
      <div>
        <button onClick={() => inputRef.current?.focus()}>输入框聚焦</button>
      </div>
    </div>
  );
};

export default DemoUseRef;