import TodoContainer from "../../components/container/todocontainer/TodoContainer";
import { useEffect, useState } from "react";
import styles from "./AddInput.module.css"

function AddInput() {

  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5030/v1/todo/todos")
    .then((response) => response.json())
    .then((jsonres) => {
      console.log(jsonres.todos[0]);
      setTodos(jsonres.todos[0]);
    })
    }, [])
  

  return (
    <div className = {styles.main}>
      <TodoContainer todo={todos}></TodoContainer> 
    </div>
  );
}

export default AddInput;
