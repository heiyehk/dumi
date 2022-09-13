import { createContext, Dispatch } from 'react';

export const objectInfo = {
  name: 'test',
  userName: 'admin'
};

type ObjectInfoDispatchType = 'aaa';

export function objectInfoReducer(state: typeof objectInfo, action: { type: ObjectInfoDispatchType, payload: Record<string, any> }) {
  switch (action.type) {
    case 'aaa':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  };
};

export const ObjectInfoContext = createContext<{
  state: typeof objectInfo;
  dispatch: (value: {
    type: ObjectInfoDispatchType;
    payload: Record<string, any>;
  }) => void;
}>({} as any);
