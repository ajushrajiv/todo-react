import api from "../../config/api";

async function createTodos(newTodo){
    const result = await api.post('/todo/addtodo', {
        todo: newTodo
    })

    const todos = result.data
    return todos
}

async function updateTodos(updatedTodo){
    const result = await api.put('/todo/updatetodo', {
        id: updatedTodo.id,
        newTask: updatedTodo.newTask
    })
    console.log("result",result)
    const todos = result.data
    return todos
}


async function deleteTodos(todoId){
    const result = await api.delete('/todo/deletetodo', {
        data: { id: todoId }
    });
    const todos = result.data
    return todos
}
export default { createTodos, updateTodos, deleteTodos };