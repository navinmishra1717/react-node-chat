import React, { useState, createContext, useContext, useSyncExternalStore } from 'react';

import useStoreData from '../../hooks/useStoreData';

// creating a context
const StoreContext = createContext(null); // generally written in generic helper function

const TextInput = ({ value }) => {
  //   const [store, setStore] = useContext(StoreContext);

  const [store, setStore] = useStore();
  return (
    <div className="field">
      {value}: {''}
      <input value={store[value]} onChange={(e) => setStore({ ...store, [value]: e.target.value })} />
    </div>
  );
};

const Display = ({ value }) => {
  //   const [store] = useContext(StoreContext);
  const [store] = useStore();
  return (
    <div className="value">
      {value}: {store[value]}
    </div>
  );
};

const FormContainer = () => (
  <div className="container">
    <h5>FormContainer</h5>
    <TextInput value="first" />
    <TextInput value="last" />
  </div>
);

const DisplayContainer = () => (
  <div className="container">
    <h5>DisplayContainer</h5>
    <Display value="first" />
    <Display value="last" />
  </div>
);
// Custom hook to communicate with store
const useStore = () => {
  const store = useContext(StoreContext);

  // subscribe the store and get the value from store
  const state = useSyncExternalStore(store.subscribe, store.get);

  return [state, store.set]; // [store value, set method]
};

export default function Context() {
  //   const store = useState({ first: '', last: '' });
  return (
    <div className="container">
      <h5>App</h5>
      {/* Context provider */}
      <StoreContext.Provider value={useStoreData()}>
        <div className="container">
          <h5>ContentContainer</h5>
          <FormContainer />
          <DisplayContainer />
        </div>
      </StoreContext.Provider>
    </div>
  );
}

/**
 * How useRef works in above components
 * The value of the store is held within store.current.However, when we set store.current, the change doesn't automatically reflect in the input box
 * and the display component since they don't re-render. To address this, we need to establish a communication model between the store and these
 * components using the pub-sub pattern. The TextInput subscribes to the store, and when the store undergoes changes, it triggers a callback.
 * The same mechanism applies to the Display component. Consequently, only the TextInput and Display components update when the store undergoes changes.
 */
