import React, { useState } from 'react';

import './counter-app.css';

export const CounterApp = () => {

  const initialState = {
    counter1: 10,
    counter2: 20,
  };
  const [ state, setState ] = useState(initialState);
  const { counter1, counter2 } = state;

  const incrementCounter1 = () => {
    setState({ ...state, counter1: counter1 + 1 });
  };

  return (
    <div>
      <h1>Counter1: { counter1 }</h1>
      <h1>Counter2: { counter2 }</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ incrementCounter1 }
      >+1</button>
    </div>
  )
}
