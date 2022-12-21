import React from 'react'
import { TodoForm } from '../../components/TodoForm'
import { useTodos } from '../../utils/useTodos';

const CreateTodoPage = () => {
  const {onCreate} = useTodos();

  return (
    <TodoForm
      title='Nuevo Todo'
      submitText='Añadir'
      submitEvent={onCreate}
    />
  )
}

export {CreateTodoPage};