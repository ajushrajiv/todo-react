import api from "../../config/api";

async function fetchAllToDos(){
    const result = await api.get("/todo/todos")
    console.log("Result from fetchAllTodos", result)
    const todos =  result.data
    console.log("Todos from fetchAllTodos", todos)
    return todos;
}

async function fetchSingleTodoById(todoId){
    const result = await api.get("/todo/todoid", {params:{todoId}})
    const todo = result.data.todo
    return todo;
}

export default { fetchAllToDos, fetchSingleTodoById};