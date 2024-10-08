import { useState } from "react";
import CommonForm from "../common-form";
import { loginFormElements } from "../config";



function LoginComponent(){
    const initialState = {
        email:'',
        password:''
    };
    const [loginFormData,setLoginFormData] = useState(initialState);
    function onHandleSubmit(event){
            event.preventDefault();
            console.log(loginFormData,"loginFormData");
            //api logi and database logic
            setLoginFormData(initialState); //after I login the field are reset back to ' ' 
    }
    return(
        <div>
            <h1>Login page/component</h1>
            <CommonForm 
            formControls={loginFormElements}
            formData={loginFormData}
            setFormData={setLoginFormData}
            buttonText='Login'
            onHandleSubmit={onHandleSubmit}
            
            />
        </div>
    );
}

export default LoginComponent;