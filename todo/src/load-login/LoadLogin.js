import { useEffect, useState } from "react";
import LoginForm from "../components/forms/loginform/LoginForm";

function LoadLogin(){

    const [isLoading,setIsloading]= useState(true);

    useEffect(function(){
        setTimeout(()=> {
             setIsloading(false);
        },3000)
    },[]);

    if(isLoading)
    return(
    <div>
        Loading....
    </div>
    );
    return <LoginForm />;
}

export default LoadLogin;