import { createContext, useEffect, useState } from "react"
//create the context
export const ShoppingCartContext = createContext(null)
//provide the state to context
function ShoppingCartProvider({children}){
    const[loading,setLoading] = useState(false);
    const[listOfProduct,setListOfProduct] = useState([]);

    async function fetchListOfProduct(){
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        console.log(result);
        if(result && result?.products){
            setListOfProduct(result?.products);
        }
    }
    useEffect(()=>{
        fetchListOfProduct()
    },[])
    console.log(listOfProduct);
    return(
        <ShoppingCartContext.Provider value={{listOfProduct}}>{children}</ShoppingCartContext.Provider>
    )
}
export default ShoppingCartProvider
//wrap context in root component
// consume the context using useContext