import React from 'react';
import '../styles/TodoForm.css'

function TodoForm({ toggleModal, onCreate }) {
    const [ newText, setNewText ] = React.useState("");

    const onChangeText = event => {
        setNewText(event.target.value)
    } 

    const cancel = () => {
        setNewText("");
        toggleModal();
    }

    const createTodo = (event) => {
        event.preventDefault();
        setNewText("");
        onCreate(newText);
        toggleModal();
    }

    return(
        <div className='TodoForm'>
            <form onSubmit={createTodo} >
                <div className='TodoForm-title'>
                    <div className='separator'></div>
                    <label className='H3'>Nuevo Todo</label>
                    <div className='separator'></div>
                </div>
                <textarea 
                    className='TodoForm-input text'
                    placeholder='Cortar la cebolla para el almuerzo' 
                    value={newText}
                    onChange={onChangeText}
                />
                <div className='botones'>
                    <button className='boton_cancelar'
                        type='button'
                        onClick={cancel}
                    >Cancelar</button>
                    <button className='boton_submit' type='submit' >Añadir</button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm };