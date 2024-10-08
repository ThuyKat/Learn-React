import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../config";



function RegisterComponent(){
    const initialState = {
        name:'',
        email:'',
        password:''
    };
    const [registerFormData,setRegisterFormData] = useState(initialState);
    function onHandleSubmit(event){
            event.preventDefault();
            console.log(registerFormData,"registerFormData");
            //api logi and database logic
            setRegisterFormData(initialState); //after I login the field are reset back to ' ' 
    }
    return(
        <div>
            <h1>Register page/component</h1>
            <CommonForm
            formControls={registerFormElements}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText="Register"
            onHandleSubmit={onHandleSubmit}
            />
        </div>
    );
}

export default RegisterComponent;