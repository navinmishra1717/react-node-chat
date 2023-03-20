import React from 'react';

export const useUnmount = (callBack) => {
  const callbackRef = React.useRef(callBack);
  callbackRef.current = callBack;
  React.useEffect(() => {
    return () => {
      callbackRef.current();
    };
  }, [callBack]);
};
