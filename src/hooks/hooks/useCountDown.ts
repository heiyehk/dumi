import React, { useEffect } from 'react';
import useStateEffect, { StateEffectReturn } from './useStateEffect';

export type CountDownDispatch = React.Dispatch<number>;

export interface CountDownProps {
  /** 默认数值 */
  startCount?: number;
  /**
   * 定时变化的步长
   * 
   * @default 1
   */
  countStep?: number;
  /**
   * 倒计时步长
   * 
   * @default 1000
   */
  countDownTime?: number;
  paddingText?: string;
  defaultText?: string;
  /** 到时间点 */
  toTime?: number;
  onStart?: CountDownDispatch;
  onAfterStart?: CountDownDispatch;
  onPause?: CountDownDispatch;
  onAfterPause?: CountDownDispatch;
  onBegin?: CountDownDispatch;
  onAfterBegin?: CountDownDispatch;
  onClear?: React.DispatchWithoutAction;
  onAfterClear?: React.DispatchWithoutAction;
  trigger?: () => void;
};

export type CountDownType = (props?: number | CountDownProps, propText?: string) => {
  countState: StateEffectReturn<number>;
  countDownTextState: StateEffectReturn<string>;
  paddingState: boolean,
  startCountDown: () => void;
  pauseCountDown: () => void;
  playCountDown: () => void;
  clearCountDown: () => void;
};

const useCountDown: CountDownType = (props, propText = '{count}') => {
  let defaultProps: CountDownProps = {
    startCount: 60,
    countStep: 1,
    countDownTime: 1000,
    toTime: 0,
    paddingText: propText
  };

  if (typeof props === 'number') {
    defaultProps.startCount = props;
  }
  if (typeof props === 'object') {
    defaultProps = Object.assign(defaultProps, props);
  }

  const {
    startCount = 60,
    countStep = 1,
    countDownTime = 1000,
    toTime = 0,
    paddingText,
    defaultText = '',
    onStart,
    onAfterStart,
    onPause,
    onAfterPause,
    onBegin,
    onAfterBegin,
    onClear,
    onAfterClear,
    trigger
  } = defaultProps;

  const [intervalInstance, setIntervalInstance] = useStateEffect<number | null>(null);
  const [padding, setPadding] = useStateEffect(false);
  const [count, setCount] = useStateEffect(startCount);
  const [countDownText, setCountDownText] = useStateEffect(defaultText);

  const replaceText = () => (paddingText as string).replace('{count}', String(count));

  useEffect(() => {
    if (count !== startCount) {
      setCountDownText(replaceText());
    } else {
      setCountDownText(defaultText);
    }
  }, [padding, count]);

  const intervalHandle = () => {
    setCount((prevCount) => {
      const nextCount = prevCount - countStep;

      if (nextCount <= toTime && trigger) {
        trigger();
      }

      return nextCount;
    });
  };

  const startCountDown = () => {
    if (intervalInstance) return;
    setPadding(true);

    if (onStart) {
      onStart(count);
    }

    intervalHandle();

    const interval = setInterval(() => {
      intervalHandle();
    }, countDownTime);
    setIntervalInstance(interval);

    if (onAfterStart) {
      onAfterStart(count);
    }
  };

  const pauseCountDown = () => {
    if (!intervalInstance) return;
    setPadding(false);

    if (onPause) {
      onPause(count);
    }

    clearInterval(intervalInstance);
    setIntervalInstance(null);

    if (onAfterPause) {
      onAfterPause(count);
    }
  };

  const playCountDown = () => {
    if (intervalInstance) return;
    setPadding(true);

    if (onBegin) {
      onBegin(count);
    }

    const interval = setInterval(() => {
      intervalHandle();
    }, countDownTime);
    setIntervalInstance(interval);

    if (onAfterBegin) {
      onAfterBegin(count);
    }
  };

  const clearCountDown = () => {
    if (!intervalInstance) return;
    setPadding(false);

    if (onClear) {
      onClear();
    }

    clearInterval(intervalInstance);
    setCount(() => startCount);
    setIntervalInstance(null);

    if (onAfterClear) {
      onAfterClear();
    }
  };

  return {
    countState: [count, setCount],
    paddingState: padding,
    countDownTextState: [countDownText, setCountDownText],
    startCountDown,
    pauseCountDown,
    playCountDown,
    clearCountDown
  };
};

export default useCountDown;
