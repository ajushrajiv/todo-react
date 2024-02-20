import api from "../../config/api";

async function fetchAllToDos(){
    const result = await api.get("/todo/todos")
    const todos =  result.data
    return todos;
}

async function fetchSingleTodoById(todoId){
    const result = await api.get("/todo/todoid", {params:{todoId}})
    const todo = result.data.todo
    return todo;
}

export default { fetchAllToDos, fetchSingleTodoById};