import { useState } from 'react';

export type ESDispatch<T> = (newValue: T, oldValue: T, defaultValue: T) => void;
type ActionPatch<T> = ((prevState: T) => T);
type SetStateAction<T> = T | ActionPatch<T>;

export type StateEffectReturn<T> = [T, (newValue: SetStateAction<T>, fn?: ESDispatch<T>) => void];

const useStateEffect = <T = any>(initialState?: T): StateEffectReturn<T> => {
  const defaultValue = typeof initialState === 'function' ? (initialState as Function)() : initialState;
  const [valueState, setValueState] = useState(defaultValue);

  const setValueStateHandle = (newValue: SetStateAction<T>, fn?: ESDispatch<T>) => {
    setValueState(newValue);

    if (fn) {
      if (typeof newValue === 'function') {
        const nextNewValue = (newValue as ActionPatch<T>)(valueState);
        console.log((newValue as ActionPatch<T>)(valueState), nextNewValue, valueState, defaultValue);

        fn(nextNewValue, valueState, defaultValue);
      } else {
        fn(newValue, valueState, defaultValue);
      }
    }
  };

  return [valueState, setValueStateHandle];
};

export default useStateEffect;
