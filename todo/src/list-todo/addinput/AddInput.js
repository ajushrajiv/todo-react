import TodoContainer from "../../components/container/todocontainer/TodoContainer";
import { useEffect, useState } from "react";
import styles from "./AddInput.module.css"
import ToDosQueries from "../../../src/api/v1/todos/ToDosQueries"
import ToDosMutation from "../../api/v1/todos/ToDosMutation";

function AddInput() {

 const [ todos, setTodos ] = useState([]);

  async function fetchToDos(){
    try{
      const jsonRes = await ToDosQueries.fetchAllToDos();
      console.log(jsonRes);
      setTodos(jsonRes);
    }catch(e){
      console.log(e);
    }
  }

  // useEffect(() => {
  //   fetch("http://localhost:5030/v1/todo/todos")
  //   .then((response) => response.json())
  //   .then((jsonres) => {
  //     console.log(jsonres.todos[0]);
  //     setTodos(jsonres.todos[0]);
  //   })
  //   }, [])

  async function fetchTodoById(todoId){
    try{
      let jsonRes = await ToDosQueries.fetchSingleTodoById(todoId);
      console.log(jsonRes);
      setTodos(jsonRes);
    }catch(e){
      console.log(e);
    }
  }


  async function fetchCreateTodos(newTodo){
    try{
     let jsonRes = await ToDosMutation.createTodos(newTodo);
      console.log("from React App")
      console.log(jsonRes);
      setTodos(jsonRes);
    }catch(e){
      console.log(e);
    }
  }

  async function fetchUpdatedTodos(updatedTodo){
    try{
      let jsonRes = await ToDosMutation.updateTodos(updatedTodo);
      console.log("updated Todo from React App")
      console.log(jsonRes);
      setTodos(jsonRes)
    }catch(e){
      console.log(e);
    }
  }

  async function fetchDeleteTodos(todoId){
    try{
     let jsonRes = await ToDosMutation.deleteTodos(todoId);
      console.log("deleted todo from React App",jsonRes.length)
      console.log(jsonRes);
      setTodos(jsonRes);

    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchToDos();

    fetchTodoById(1);

   let newTodo = {
      id: 4,
      task:"book an appointment"
    }
    fetchCreateTodos(newTodo);

    let updatedTodo = {
      id:1,
      newTask:"PSM"
    }
    fetchUpdatedTodos(updatedTodo);

    fetchDeleteTodos(1);
  },[])
  

  return (
    <div className = {styles.main}>
      <TodoContainer todo={todos}></TodoContainer> 
    </div>
  );
}

export default AddInput;
