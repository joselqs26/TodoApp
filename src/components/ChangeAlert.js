import React from 'react'
import { useStorageListener } from '../utils/useStorageListener';

import '../styles/ChangeAlert.css'

const ChangeAlert = ({ sincronizeTodos }) => {
    const { show , toggleShow } = useStorageListener();
    
    if (show) { 
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert'>
                    <div className='ChangeAlert-title'>
                        <div className='separator'></div>
                        <label className='H3'>Actualización</label>
                        <div className='separator'></div>
                    </div>
                    <p className='ChangeAlert-text text'>Ha habido cambios en otra pestaña de la App.</p>
                    <div className='ChangeAlert-buttons'>
                        <button className='boton_submit' onClick={() => {
                            toggleShow(false);
                            sincronizeTodos();
                        }}>Recargar Todo's</button>
                    </div>
                </div> 
            </div> 
        )
    } else {
        return null;
    }
}

export { ChangeAlert };