import { useState } from "react";
import StandardButton from "../../buttons/StandardButton";
import StandardLabel from "../../labels/StandardLabel";
import styles from "./LoginForm.module.css"

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    return(
        <div className="form">
            <form onSubmit = {handleSubmit}>
                <StandardLabel text="Username" />
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputform}
                    placeholder="user name" required />

                <StandardLabel text="Password" />
                <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputform}
                    placeholder="Enter Password" required />

                <StandardLabel text="Stay logged in" />
                <input type="checkbox"
                    checked={stayLoggedIn}
                    onChange={(e)=> setStayLoggedIn(e.target.checked)} />

                <StandardButton text={"Submit"} />
            </form>
        </div>
    );
}
 export default LoginForm;