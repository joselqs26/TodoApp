import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TodoForm.css'

function TodoForm( props ) {
    const [ newText, setNewText ] = React.useState( props.todoText || '' );

    const navigate = useNavigate();

    const onChangeText = event => {
        setNewText(event.target.value)
    } 

    const cancel = () => {
        setNewText("");
        navigate('/');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setNewText("");
        props.submitEvent(newText);
        navigate('/');
    }

    return(
        <div className='TodoForm'>
            <form onSubmit={onSubmit} >
                <div className='TodoForm-title'>
                    <div className='separator'></div>
                    <label className='H3'> {props.title} </label>
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
                    <button className='boton_submit' type='submit' > {props.submitText} </button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm };