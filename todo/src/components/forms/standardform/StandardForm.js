import StandardBtn from "../../buttons/StandardButton";
import styles from "./StandardForm.module.css";

function StandardForm() {
  return (
      <div className={styles.input}>
        <form>
          <input
            type="text"
            className={styles.inputform}
            placeholder="Add to the list"
          ></input>
        </form>
        <div className={styles.spacer}></div>
        <StandardBtn text={"Add task"} />
      </div>
  );
}

export default StandardForm;
