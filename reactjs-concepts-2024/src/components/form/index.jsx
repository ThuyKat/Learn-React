import { useState } from "react";



export default function FormComponent() {
    const [nameValue,setNameValue] = useState('');
    const [emailValue,setEmailValue] = useState([]);
    const[formData,setFormData] = useState({
        name:'',
        email:'',
    });

    // function handlerInputChange(event){
    //     console.log(event);
    //     const{value} = event.target;
    //     setNameValue(value);
    // }

    function handleSubmit(event){
        event.preventDefault();
        //call the api and pass the name value
        console.log(nameValue,emailValue); //This feature is often used for debugging, allowing developers to log a value alongside a label or description.

    }
    // function handleEmailChange(event){
    //     const{value} = event.target;
    //     setEmailValue(value);
    // }

    // handle both name and email in one function
    function handleOnChange(event){
        console.log(event.target.name); // name,email, etc
        const{name,value} = event.target; // each time one input and its value got changed -> updated to event.target and be destructured here. This will run in every single change.
        setFormData({
            ...formData,
            [name] : value
        });
        console.log(formData);
    }
    return (
        <div>
            <h1> Form</h1>
            <form onSubmit={handleSubmit}>
                {/* the "name" property is picked up by event.target.name */}
            <input value={formData.name} name="name" id="name" placeholder="Enter your name" onChange={handleOnChange}/>
            <input  value={formData.email}  type="email" name="email" id="email" placeholder="Enter your email" onChange={handleOnChange}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}
    
