import React, { useState } from 'react';
import { useMount, useUnmount } from '../components/hooks';
import { useSetState } from '../components/hooks/useSetState';
import { useUpdateEffect } from '../components/hooks/useUpdateEffect';

const Test = () => {
  const [count, setCount] = useState(0);
  //   useMount(() => {
  //     console.log('useMount');
  //   });

  //   useUnmount(() => {
  //     console.log('useUnmount');
  //   });
  const [person, setPerson] = useSetState({
    name: 'test',
    age: 10,
  });
  const onSetName = (name) => {
    setPerson({ name });
  };
  const onSetAge = () => {
    setPerson((prevValue) => {
      return {
        ...prevValue,
        age: 50,
      };
    });
  };

  //   useUpdateEffect(() => {
  //     console.log('Count changed', count);
  //   }, [count]);

  return (
    <div>
      count: {count}
      <p>name: {person.name}</p>
      <p>age: {person.age}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => onSetName('test1')}>change name</button>
      <button onClick={onSetAge}>change age</button>
    </div>
  );
};

export default Test;
