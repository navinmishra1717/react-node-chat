import React, { useState, useRef, createRef } from 'react';

export default function RefPage() {
  // const inputRef = createRef();
  const inputRef = useRef(); // createRef returns a new reference on every render while useRef returns the same ref each time
  const buttonRef = useRef();
  const handleButton = () => {
    inputRef.current.focus();
    buttonRef.current.blur();
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button ref={buttonRef} onClick={handleButton}>
        Click here
      </button>
    </>
  );

  // const [renderIndex, setRenderIndex] = React.useState(1);
  // const refFromUseRef = React.useRef();
  // const refFromCreateRef = createRef();

  // if (!refFromUseRef.current) {
  //   refFromUseRef.current = renderIndex;
  // }

  // if (!refFromCreateRef.current) {
  //   refFromCreateRef.current = renderIndex;
  // }

  // const handleRef = () => {
  //   refFromUseRef.current += 1;

  //   console.log(refFromUseRef.current);
  // };

  // return (
  //   <>
  //     <p>Current render index: {renderIndex}</p>
  //     <p>
  //       <b>refFromUseRef</b> value: {refFromUseRef.current}
  //     </p>
  //     <p>
  //       <b>refFromCreateRef</b> value:{refFromCreateRef.current}
  //     </p>

  //     <button onClick={() => setRenderIndex((prev) => prev + 1)}>Cause re-render</button>
  //     {/* <button onClick={() => handleRef()}>Cause re-render</button> */}
  //   </>
  // );
}

/**
 * How useRef works in above components
 * The value of the store is held within store.current.However, when we set store.current, the change doesn't automatically reflect in the input box
 * and the display component since they don't re-render. To address this, we need to establish a communication model between the store and these
 * components using the pub-sub pattern. The input component subscribes to the store, and when the store undergoes changes, it triggers a callback.
 * The same mechanism applies to the Display component. Consequently, only the TextInput and Display components update when the store undergoes changes.
 */

/**
 * useRef can be used when we have to keep track of the previous state of an object, eg: user
 * to reuse the code, we can use a custom hook like this
 *
    const usePrevious = (value) => {
      const ref = React.useRef();
      React.useEffect(() => {
          ref.current = value
      }, [value]);

      return ref.current;
    }
  *
*/
