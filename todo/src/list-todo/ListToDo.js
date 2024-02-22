import StandardLabel from "../components/labels/StandardLabel";
import ListTitle from "../utilities/ListTitle";
import styles from "./ListToDo.module.css";
import AddInput from "./addinput/AddInput";

function ListToDo(){
    return(
        <div>
            <div className={styles.maincontainer}>
                <h4>Todo list</h4>
            </div>
                <AddInput />
        </div>
    );
}

export default ListToDo;