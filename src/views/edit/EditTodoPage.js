import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { TodoForm } from '../../components/TodoForm';
import { useTodos } from '../../utils/useTodos';

const EditTodoPage = () => {
  const location = useLocation();

  const {loading,getTodo, onEdit} = useTodos();
  const {id} = useParams();
  const numId = Number(id);

  if( loading && (! location.state) ) {
    return <Loader />
  }

  const todo = location.state ? location.state.todo : getTodo(numId);

  return (
    <TodoForm
        title='Editar Todo'
        submitText='Editar'
        todoText={ todo.text }
        submitEvent={(text) => {onEdit(numId,text)}}
      />
  )
}

export {EditTodoPage};