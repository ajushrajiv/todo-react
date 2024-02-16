import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(){
    return(
        <div className={styles.maincontainer}>
            <ul>
                <li>
                    <Link to="/">Home</Link >
                </li>
                <li>
                    <Link to="todo">TODO List</Link >
                </li>
                <li>
                    <Link to="about">About</Link >
                </li>
                <li>
                    <Link to="login">Login</Link >
                </li>
            </ul>    
        </div>
    )
}

export default Navbar;