import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        items: todos,
        saveItems: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
    } = useLocalStorage("TODOS_ALPHA");

    const onComplete = id => {
        let index = todos.findIndex(todo => todo.id === id)

        let todosClone = [...todos];
        todosClone[index] = {
            ...todosClone[index],
            resolved: !(todosClone[index].resolved)
        };
        saveTodos(todosClone);
    }

    const onDelete = id => {
        let index = todos.findIndex(todo => todo.id === id)

        let todosClone = [...todos];
        todosClone.splice(index, 1);
        saveTodos(todosClone);
    }

    const onCreate = text => {
        const id = generetaTodoId(todos);
        const newTodo = {id, text, resolved: false}
        
        let todosClone = [...todos];
        todosClone.push(newTodo);
        saveTodos(todosClone);
    }
    
    const onEdit = (id,text) => {
        let index = todos.findIndex(todo => todo.id === id)

        let todosClone = [...todos];
        todosClone[index] = {
            ...todosClone[index],
            text
        };
        saveTodos(todosClone);
    }

    const getTodo = id => {
        let index = todos.findIndex(todo => todo.id === id)
        return todos[index];
    }

    const states = {
        loading,
        error,
        todos,
        onComplete,
        onDelete,
        onCreate,
        onEdit,
        getTodo,
        sincronizeTodos,
    }

    return states;
}

const generetaTodoId = (todos) => {
    if (!todos.length) return 1;

    const idList = todos.map( todo => todo.id );
    const idMax = Math.max(...idList);
    return idMax + 1;
}

export { useTodos };