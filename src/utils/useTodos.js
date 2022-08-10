import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        items: todos,
        saveItems: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
    } = useLocalStorage("TODOS");

    const onComplete = text => {
        let index = todos.findIndex(todo => todo.text === text)

        let todosClone = [...todos];
        todosClone[index] = {
            ...todosClone[index],
            resolved: !(todosClone[index].resolved)
        };
        saveTodos(todosClone);
    }

    const onDelete = text => {
        let index = todos.findIndex(todo => todo.text === text)

        let todosClone = [...todos];
        todosClone.splice(index, 1);
        saveTodos(todosClone);
    }

    const onCreate = text => {
        const newTodo = {text, resolved: false}
        
        let todosClone = [...todos];
        todosClone.push(newTodo);
        saveTodos(todosClone);
    }

    const states = {
        loading,
        error,
        todos,
        onComplete,
        onDelete,
        onCreate,
        sincronizeTodos,
    }

    return states;
}


export { useTodos };