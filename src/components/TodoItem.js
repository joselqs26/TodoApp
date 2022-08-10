import React from 'react';
import { TodoIcon } from './TodoIcon';

import '../styles/TodoItem.css'

function TodoItem( {text, resolved, onComplete, onDelete} ) {
    return (
        <li className='TodoItem'>
            <TodoIcon type='check' size='32px' color={resolved ? "#9AD4D6" : '#292D3C'} onClick={onComplete}/>
            <p className={`text ${resolved ? 'textResolved' : ''}`}>{text}</p>
            <TodoIcon type='remove' size='25px' onClick={onDelete}/>
        </li>
    );
}

export { TodoItem };