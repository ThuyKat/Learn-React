import { useState } from "react";
import Counter from "./use-call-back/counter";

export default function UseCallbackExample(){

 const[countOne, setCountOne] = useState(0);
 const[countTwo, setCountTwo] = useState(0);
 
 //when I click to increase countOne, it doesnt affect countTwo value hence onClick function of countTwo will not be called
 //for functions, a shallow comparison will always return false because a new function object is created on each render.
 //Without useCallback, even if countOne or countTwo doesn't change, the onClick prop would be a new function reference on every render of UseCallbackExample.
 //This new function reference would cause memo to think the props have changed, triggering a re-render of Counter.
 //useCallback memoizes the function itself, returns the same function reference if dependency list is unchanged
 const memoriseSetCountOneFunc = useCallback(()=> setCountOne(countOne+1),[countOne]);
 const memoriseSetCountTwoFunc = useCallback(()=> setCountTwo(countTwo+1),[countTwo]);

 return(
     <div>
         <h1>Use callback</h1>
         <Counter  countValue={countOne} onClick = {memoriseSetCountOneFunc}/>
         <Counter  countValue={countTwo} onClick = {memoriseSetCountTwoFunc}/>

     </div>
 );

}

