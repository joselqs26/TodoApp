import React from 'react';
import { TodoIcon } from './TodoIcon';

import '../styles/TodoSearch.css'

function TodoSearch({ searchValue , updateSearch , loading }) {
    const onSearchValueChange = (event) => {
        updateSearch(event.target.value);
    };

    return (
        <div className={`TodoSearch ${loading ? 'TodoSearch-disabled' : ''}`} >
            <input
                className='TodoSearch-input text'
                type="text" 
                placeholder="Escribe la tarea..."
                value={searchValue}
                onChange={onSearchValueChange}
                disabled={loading}
            />
            <TodoIcon type='search' size='25px'/>
        </div>
    );
}

export { TodoSearch };