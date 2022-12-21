import React from "react";

import { useSearching } from "../../utils/useSearching";
import { useTodos } from "../../utils/useTodos";

import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch.js";
import { TodoList } from "../../components/TodoList.js";
import { TodoItem } from "../../components/TodoItem.js";
import { CreateTodoButton } from "../../components/CreateTodoButton.js";
import { Loader } from "../../components/Loader";
import { EmptyTodos } from "../../components/EmptyTodos";
import { Error } from "../../components/Error";
import { EmptySearchResults } from "../../components/EmptySearchResults";
import { TodoHeader } from "../../components/TodoHeader";
import { ChangeAlert } from "../../components/ChangeAlert";

import "../../styles/AppUI.css";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const {
    error,
    loading,
    todos,

    onComplete,
    onDelete,

    sincronizeTodos,
  } = useTodos();

  const navigate = useNavigate();

  const { 
    searchValue,
    updateSearch,
    searchItems
  } = useSearching(todos);

  return (
    <div className="AppUI">
      <h2 className="H2">Todo App</h2>

      <TodoHeader loading={loading}>
        <TodoSearch searchValue={searchValue} updateSearch={updateSearch} />
        <TodoCounter todos={todos} />
      </TodoHeader>

      <TodoList
        todoList={searchItems()}
        error={error}
        loading={loading}
        emptyTodos={!loading && !todos.length}
        emptySearchResults={
          !loading && !searchItems().length && Boolean(todos.length)
        }
        onError={() => <Error />}
        onLoading={() => <Loader />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => (
          <EmptySearchResults searchValue={searchValue} />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            resolved={todo.resolved}
            onComplete={() => {
              onComplete(todo.id);
            }}
            onDelete={() => {
              onDelete(todo.id);
            }}
            onEdit={() => {
              navigate(
                `/edit/${todo.id}`,
                {
                  state: {
                    todo
                  }
                }
              )
            }}
          />
        )}
      </TodoList>

      <CreateTodoButton 
        onClick={ () => navigate('/new') }
      />

      <ChangeAlert sincronizeTodos={sincronizeTodos} />
    </div>
  );
}

export {HomePage};
