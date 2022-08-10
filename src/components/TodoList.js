import React from 'react';
import '../styles/TodoList.css'

function TodoList({
    todoList,
    error,
    loading,
    emptyTodos,
    emptySearchResults,
    onError,
    onLoading,
    onEmptyTodos,
    onEmptySearchResults,
    render,
    children
}) {
    return (
        <ul className={`TodoList ${(error || loading || emptyTodos || emptySearchResults) ? 'TodoList--center' : ''}`}>
            {error && onError()}
            {loading && onLoading()}
            {emptyTodos && onEmptyTodos()}
            {emptySearchResults && onEmptySearchResults()}
            {(!loading && !error && todoList) && todoList.map(render || children)}
        </ul>
    );
}

export { TodoList };