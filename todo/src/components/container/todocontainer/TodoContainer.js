import styles from "./TodoContainer.module.css"

function TodoContainer({ todo }){
    return(
        <div className={styles.mainContainer}>
            <p>Task: { todo.task }</p>
            <p>To be done before: {todo.doBefore}</p>
            <input type="checkbox" value="Completed">
            </input>    
                <label>Completed</label>
        </div> 
    )
}

export default TodoContainer;