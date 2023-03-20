import React from 'react';

export const useUpdateEffect = (effectCallback, deps = []) => {
  const isFirstMount = React.useRef(false);

  console.log(isFirstMount, 'isFirstMount');

  React.useEffect(() => {
    return () => {
      isFirstMount.current = false;
    };
  });

  React.useEffect(() => {
    // Do not execute effect callback for the first mount
    if (!isFirstMount.current) {
      isFirstMount.current = true;
    } else {
      effectCallback();
    }
  }, [deps, effectCallback]);
};
