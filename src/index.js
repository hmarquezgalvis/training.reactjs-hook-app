import React from 'react';
import ReactDOM from 'react-dom';

// import { HookApp } from './hook-app';
// import { CounterApp } from './components/01-use-state/counter-app';
// import CounterWithCustomHook from './components/01-use-state/counter-with-custom-hook';
// import { SimpleForm } from './components/02-use-effect/simple-form';
import { FormWithCustomHook } from './components/02-use-effect/form-with-custom-hook';

ReactDOM.render(
  <FormWithCustomHook />,
  document.getElementById('root')
);