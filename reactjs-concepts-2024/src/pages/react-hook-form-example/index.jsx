import { useForm } from "react-hook-form"



export default function ReactHookFormExamplePage(){
 //it is popular to use React hook form with zod -> provide schema validation for forms
 // handleSubmit prevens the default form submitssion, runs all the validation set up, once validation passed, call onSubmitForm function
    const {register,handleSubmit, formState:{errors},reset} = useForm();
    function onSubmitForm(formData){
        console.log(formData); // this can be use to store into database or send data
        reset(); // reset the form after submitting
    }

    return(
        <div>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <lable>Email</lable>
                    {/* register is a function, returns an object. The spread operator is used to spread all these properties onto the input element */}
                    <input {...register('email',{
                        required:true
                    })} name="email" type="email"/>
                    {
                        errors.email && errors.email.type === 'required'? <p style ={{color:'red',fontWeight:'bolder',margin:'20px'}}>Email is required</p> : null
                    }
                </div>

                <div>
                    <lable>Password</lable>
                    <input {...register('password',{
                        required:true,minLength:5
                    })} name="password" type="password"/>
                    {
                        errors.password && errors.password.type === 'required'? <p style ={{color:'red',fontWeight:'bolder',margin:'20px'}}>Password is required</p> : null
                    }
                    {
                        errors.password && errors.password.type ==='minLength' ? <p style={{color:'red',fontWeight:'bolder',margin:'20px'}}>Password should be at least 8 characters! Please verify your password</p> : null
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}