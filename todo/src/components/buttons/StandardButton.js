import styles from "./StandardButton.module.css"

function StandardButton({onclick,style,text}){
    return(
        <div className={styles.btn} style={style} onClick={onclick}>
            {text}
        </div>
    );
}

export default StandardButton;