import React, { FC, useEffect, useState } from 'react';

interface ILazyComponentProps {
  wait?: number;
}

const LazyComponent: FC<ILazyComponentProps> = ({ wait = 500 }) => {
  /** 模拟耗时加载 */
  // const pre = Date.now();
  // while (Date.now() - pre < wait) { }

  const arrayIndex = new Array(29999999).fill(undefined).map((item, index) => index);

  return (
    <div>LazyComponent</div>
  );
}
export default LazyComponent;
