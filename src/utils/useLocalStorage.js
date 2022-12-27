import React from 'react';

const initialState = (initialValue) => ({
    loading : true,
    error : false,
    sincronized : true,
    items : initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    update: 'UPDATE',
    synchronize: 'SYNCHRONIZE',
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {...state, error: payload},
    [actionTypes.success]: {...state, items: payload, loading: false, sincronized: true, error: false},
    [actionTypes.update]: {...state, items: payload},
    [actionTypes.synchronize]: {...state, loading: true, sincronized: false},
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}

function useLocalStorage(itemName, initialValue = []) {
    const [state, dispatch] = React.useReducer(reducer, initialState(initialValue))

    const {loading, error, sincronized, items} = state;

    const onError = (err) => dispatch({type: actionTypes.error, payload: err});
    const onSuccess = (items) => dispatch({type: actionTypes.success, payload: items});
    const onUpdate = (items) => dispatch({type: actionTypes.update, payload: items});
    const onSynchronize = () => dispatch({type: actionTypes.synchronize});

    React.useEffect(() => {
        setTimeout(() => {
            try {
                // Llamado a LS del Item
                const localStorageItems = localStorage.getItem(itemName);
                // Items cargados a JS
                let parsedItems;

                // Si existe el Item, cargarlo en parsedItems
                if (localStorageItems) {
                    parsedItems = JSON.parse(localStorageItems);
                    
                    // Si no existe, crearlo en el LS con el valor inicial,
                    // de igual manera en parsedItems
                } else {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItems = initialValue;
                }

                onSuccess(parsedItems);
            } catch (err) {
                onError(err);
            }
        }, 3000)
    }, [sincronized])
    
    // saveItems cambia el valor en LS y también del estado
    const saveItems = newItems => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItems));
            onUpdate(newItems);
        } catch (err) {
            onError(err);
        }
    }
    
    const sincronizeItem = () => {
        onSynchronize();
    }

    // El Hook retorna el valor de items y la función de 
    // actualización
    return {items, saveItems, loading, error, sincronizeItem};
}

export { useLocalStorage };