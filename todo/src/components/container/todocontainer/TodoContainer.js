import { useState } from "react";
import Checkbox from "../../checkbox/Checkbox";
import styles from "./TodoContainer.module.css"
import ToDosMutation from "../../../api/v1/todos/ToDosMutation";
import StandardButton from "../../buttons/StandardButton";

function TodoContainer({ todo }){

    const [completed, setCompleted] = useState(todo.completed);
    const [ deleted, setDeleted ] = useState(false);
    const [ task, setTask ] = useState(todo.task);
    const [ due, setDue ] = useState(todo.doBefore);

    async function onClickDone(){
        await ToDosMutation.markTodos(todo.id, !completed)
        setCompleted(!completed);
    }

    async function onClickDelete(){
        setDeleted(true);
        await ToDosMutation.deleteTodos(todo.id);
    }

    async function onClickSendUpdate(){
       const response = await ToDosMutation.updateTodos(todo.id,task,completed,due)
       console.log(response)
    }

    if(deleted) return null;

    return(
    <div className={styles.mainContainer}>
        {console.log("received output to container",todo)}
        <p>TaskID: { todo.id }</p>
        <br />
        <label>Task</label>
        <input type = "text"
                value = { task }
                onChange = {(event) => setTask(event.target.value)}>
        </input>
        <br />
        <label>Due date</label>
        <input type = "text"
                value = { due }
                onChange = {(event) => setDue(event.target.value)}>
        </input>

        <p>To be completed: { todo.doBefore }</p>
        <p>Completed: <Checkbox isChecked={completed} onClick={onClickDone}></Checkbox></p>
        <StandardButton text = {"Delete"} onclick={onClickDelete} />
        <StandardButton text={"Update"} onclick={onClickSendUpdate} />
    </div>
    )
}

export default TodoContainer;