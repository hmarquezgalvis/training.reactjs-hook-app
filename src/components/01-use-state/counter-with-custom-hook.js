import React from 'react'
import { useCounter } from '../../hooks/use-counter';

export default function CounterWithCustomHook() {

  const { state, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Custom Hook: { state }</h1>
      <hr />
      <button  className="btn btn-primary" onClick={ () => increment(5) }>+1</button>
      <button  className="btn btn-danger mx-3" onClick={ reset }>reset</button>
      <button  className="btn btn-primary" onClick={ () => decrement(5) }>-1</button>
    </div>
  )
}
