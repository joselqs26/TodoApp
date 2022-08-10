import React from 'react'
import { TodoIcon } from './TodoIcon';

const Error = () => {
  return (
    <div className='Error'>
        <TodoIcon
        type="error"
        size="150px"
      />
        <p className='text'>Usa el botón de Crear para agregar nuevos TODO's</p>
    </div>
  )
}

export { Error };