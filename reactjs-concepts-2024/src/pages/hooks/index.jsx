import { useRef } from "react";
import { useEffect } from "react";
function Hooks(){
    const countValue = useRef(0); 
    // useRef returns mutable object persist throughout lifetime of component
    //obj.current is the only property of the obj, it can be updated without causing a re-render of the component
    // a new value can be assigned to obj.recurrent without causing re-rendering of component
    //current can hold any type of value (object, primitive, function, etc.).

    const divRefElement = useRef();
    const inputRefElement = useRef();
    function handleClick(){
        countValue.current++;
    }
    //access div element on page load
    useEffect(()=>{

        const getDivElement = divRefElement.current;
        inputRefElement.current.focus();
        getDivElement.style.color = 'red';
        setTimeout(()=>{
            getDivElement.style.color ='green'
        },2000);
    },[])
    return(
        <div>
            <h1>Use refs, use callback, use memo hooks</h1>
            {/* use refs: reference particular element, accessing DOM elements and manipulating them, return a mutable objects*/}
            <button onClick={handleClick}>Click Me</button>
            {/* accessing DOM element with useRef */}
            <div ref={divRefElement}>
            Some random text
            </div>
            {/* to access this dif, we create ref property inside div tag */}
            <input name="name" placeholder="Enter your name" ref={inputRefElement}></input>
        </div>
        
       
    )
}
export default Hooks;