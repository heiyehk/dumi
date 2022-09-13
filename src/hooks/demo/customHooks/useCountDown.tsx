import React, { useEffect } from 'react';
import useCountDown from '../../hooks/useCountDown';

const DemoUseCountDown = () => {
  const {
    countState: [count, setCount],
    countDownTextState: [countDownText],
    paddingState,
    startCountDown,
    clearCountDown,
    pauseCountDown,
    playCountDown
  } = useCountDown({
    startCount: 10,
    defaultText: '发送验证码',
    paddingText: '{count}后可重新发送'
  });

  const {
    countState: [aCount],
    startCountDown: startACountDown,
    clearCountDown: clearACountDown
  } = useCountDown(10);

  useEffect(() => {
    if (count === 0) {
      clearCountDown();
    }
  }, [count]);

  useEffect(() => {
    if (aCount <= 0) {
      clearACountDown();
    }
  }, [aCount]);

  return (
    <div>
      <div>count: {count}</div>
      <div>text: {countDownText}</div>
      <div>padding: {String(paddingState)}</div>
      <div>
        <span>示例:</span>
        <button disabled={paddingState}>{countDownText}</button>
      </div>
      <div>
        <button onClick={startCountDown}>start</button>
        <button onClick={clearCountDown}>clear</button>
        <button onClick={pauseCountDown}>pause</button>
        <button onClick={playCountDown}>play</button>
      </div>
      <hr />
      <div>
        <div>aCount: {aCount}</div>
        <div>{aCount}后自动停止</div>
        <div>
          <button onClick={startACountDown}>start</button>
        </div>
      </div>
    </div>
  );
};

export default DemoUseCountDown;
