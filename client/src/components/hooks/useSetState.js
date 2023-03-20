import { useState } from 'react';

export const useSetState = (initState) => {
  console.log(initState, 'init');
  const [state, setState] = useState(initState);

  const setMergeState = (value) => {
    console.log(value, 'value');
    setState((prevValue) => {
      console.log(prevValue, 'prevValue');
      const newValue = typeof value === 'function' ? value(prevValue) : value;
      return newValue ? { ...prevValue, ...newValue } : prevValue;
    });
  };

  return [state, setMergeState];
};
