import React from "react";

import { useSearching } from "../utils/useSearching";
import { useTodos } from "../utils/useTodos";
import { useModal } from "../utils/useModal";

import { Modal } from "../components/Modal";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch.js";
import { TodoList } from "../components/TodoList.js";
import { TodoItem } from "../components/TodoItem.js";
import { CreateTodoButton } from "../components/CreateTodoButton.js";
import { TodoForm } from "../components/TodoForm";
import { Loader } from "../components/Loader";
import { EmptyTodos } from "../components/EmptyTodos";
import { Error } from "../components/Error";
import { EmptySearchResults } from "../components/EmptySearchResults";
import { TodoHeader } from "../components/TodoHeader";
import { ChangeAlert } from "../components/ChangeAlert";

import "../styles/AppUI.css";
import "../styles/index.css";

function App() {
  const {
    error,
    loading,
    todos,

    onComplete,
    onDelete,
    onCreate,

    sincronizeTodos,
  } = useTodos();

  const { openModal, toggleModal } = useModal();
  const { searchValue, updateSearch, searchItems } = useSearching(todos);

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
            key={todo.text}
            text={todo.text}
            resolved={todo.resolved}
            onComplete={() => {
              onComplete(todo.text);
            }}
            onDelete={() => {
              onDelete(todo.text);
            }}
          />
        )}
      </TodoList>

      <Modal openModal={openModal}>
        <TodoForm toggleModal={toggleModal} onCreate={onCreate} />
      </Modal>

      <CreateTodoButton onClick={toggleModal} />

      <ChangeAlert sincronizeTodos={sincronizeTodos} />
    </div>
  );
}

export default App;
