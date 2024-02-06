import StandardLabel from "../components/labels/StandardLabel";
import ListTitle from "../utilities/ListTitle";
import styles from "./ListToDo.module.css";
import AddInput from "./addinput/AddInput";

function ListToDo(){
    return(
        <div>
            <div className={styles.maincontainer}>
                <StandardLabel text={`${ListTitle.title}`} />
            </div>
                <AddInput />
        </div>
    );
}

export default ListToDo;