import React from 'react'
import { useForm } from '../../hooks/use-form';
import { Message } from './message';

export const FormWithCustomHook = () => {

  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [ formState, handleInputChange ] = useForm(initialState)
  const { name, email, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log( formState );
  }

  return (
    <form className="container" onSubmit={ handleSubmit }>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group mb-3">
        <input type="text" name="name" placeholder="Tu Nombre" autoComplete="off"
          className="form-control"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group mb-3">
        <input type="text" name="email" placeholder="Tu Email" autoComplete="off"
          className="form-control"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group mb-3">
        <input type="password" name="password" placeholder="*****" autoComplete="off"
          className="form-control"
          value={ password }
          onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }

      <button type="submit" className="btn btn-primary">Send</button>

    </form>
  )
}
