import React, { useEffect, useState } from 'react'

export const Message = () => {

  const initialCoords = { x: 0, y: 0 };
  const [ coords, setCoords ] = useState(initialCoords)
  
  useEffect(() => {
    console.log('mounted component');

    const mouseMove = ({ x, y }) => {
      setCoords({ x, y });
      console.log( 'moving mouse' );
    };

    window.addEventListener( 'mousemove', mouseMove );

    return () => {
      console.log('unmounted component');
      window.removeEventListener( 'mousemove', mouseMove );
    }
  }, [])

  return (
    <div>
      You are cool!
      <br/>
      x: { coords.x } y: { coords.y }
    </div>
  )
}
