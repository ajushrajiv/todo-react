import styles from "./StandardLabel.module.css"

function StandardLabel({text,style}){
    return(
        <div className={styles.labelgeneral} style={style}>
            {text}
        </div>
    );
}

export default StandardLabel;