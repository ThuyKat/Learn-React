import { createContext, useState } from "react";




//create the context, export so it is accessible
//When you create a context using createContext(), React sets up a system for passing data through the component tree without having to pass props manually at every level.
export const GlobalContext = createContext(null); // default value is null

//create the global state that receives components as children
//By wrapping your app or a section of your app with <GlobalState>, you're essentially creating a "bubble" of available data that any component within can tap into, without needing to explicitly pass this data as props at each level.
function GlobalState({children}){
    //children prop: In React, children is a special prop that contains the child elements passed to a component. When you use a component as a wrapper, anything inside that component is passed as the children prop1.
    const [theme,setTheme] = useState('light');  //now I need to get this theme to the text component
    //provide value which is now an empty object
    return <GlobalContext.Provider value={{theme,setTheme}}>{children}</GlobalContext.Provider> // here we provide the state so that in components they can consume the state
}//whatever I pass to the object inside value prop, I would be able to consume in child component

export default GlobalState;

// next we need to wrap this in Root component