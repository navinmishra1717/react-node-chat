import React from 'react';

export const useMount = (callBack) => {
  React.useEffect(callBack, []);
};
