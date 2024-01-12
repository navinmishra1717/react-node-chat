import React, { useCallback, useRef } from 'react';

const useStoreData = () => {
  const store = useRef({
    first: '',
    last: '',
  });

  // getter method
  const get = useCallback(() => store.current, []);

  // store the callback which subscribes the store
  const subscribers = useRef(new Set());

  // setter method which update the store value and calls the subscribe function
  const set = useCallback((value) => {
    store.current = { ...store.current, ...value };
    return subscribers.current.forEach((callback) => callback());
  }, []);

  // subscribe method which adds callback to subscribers
  // and returns the cleanup function
  const subscribe = useCallback((callback) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return { get, set, subscribe };
};

export default useStoreData;
