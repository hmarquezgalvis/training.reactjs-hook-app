import React from 'react';
import ReactDOM from 'react-dom';

// import { HookApp } from './hook-app';
// import { CounterApp } from './components/01-use-state/counter-app';
import CounterWithCustomHook from './components/01-use-state/counter-with-custom-hook';

ReactDOM.render(
  <CounterWithCustomHook />,
  document.getElementById('root')
);