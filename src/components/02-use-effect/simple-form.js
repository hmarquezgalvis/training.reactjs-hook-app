import React, { useEffect, useState } from 'react'
import { Message } from './message';

export const SimpleForm = () => {

  const initialState = {
    name: '',
    email: '',
  };
  const [ formState, setFormState ] = useState(initialState)
  const { name, email } = formState;

  useEffect( () => {
    console.log('hi!');
  }, []);

  useEffect( () => {
    console.log('form updated!');
  }, [ formState ]);

  useEffect( () => {
    console.log('email updated!');
  }, [ email ]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  }

  return (
    <div className="container">
      <h1>useEffect</h1>
      <hr />

      <div className="form-group mb-3">
        <input type="text" name="name" placeholder="Tu Nombre" autoComplete="off"
          className="form-control"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group">
        <input type="text" name="email" placeholder="Tu Email" autoComplete="off"
          className="form-control"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }

    </div>
  )
}
