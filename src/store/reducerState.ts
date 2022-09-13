export let number = 1;

export function reducer(state: number, action: 'add' | 'subtract') {
  switch (action) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    default:
      return state;
  };
};