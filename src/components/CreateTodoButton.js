import React from 'react';

import '../styles/CreateTodoButton.css'

function CreateTodoButton(props) {
    return (
        <button className='CreateTodoButton' {...props}>+</button>
    );
}

export { CreateTodoButton };