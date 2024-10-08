import useFetch from "../../hooks/use-fetch";
import { useMemo, useState } from "react";
function UseMemoExample(){

    const {data,loading} = useFetch('https://dummyjson.com/products');
    const[flag,setFlag] = useState(false);
    function filterProductByPrice(getProducts){
        console.log('this function is getting rendered');
        return getProducts?.length >0? getProducts.filter(singleProductItem => singleProductItem.price > 10) : [];
    }
    const memorizedVersion = useMemo(()=>filterProductByPrice(data?.products),[data?.products])
    if(loading) return <h1>Data is loading! Please wait</h1>
    console.log(data);
    return(
        <div>
            <h1 style={{color : flag ? 'red' : 'black', background: 'grey'}}>Use Memo</h1>
            <button onClick={()=>setFlag(!flag)}>Toggle Flag</button>
            <ul>
                {
                   memorizedVersion.map(item => <li>{item.title}</li>)
                }
            </ul>
        </div>
    );
}
export default UseMemoExample;
// when we click on toggle flag, the color of h1 text is changing that trigger re-render of the function
// to avoid this re-rendering, we use useMemo to memorize( cache) the return result of function
//useMemo only recomputes the memoized value when one of its dependencies has changed.
//The result of this useMemo call is stored in the memorizedVersion variable
//If data?.products hasn't changed since the last render, useMemo will return the previously cached result instead of calling filterProductByPrice again.
//filterProductByPrice is an expensive operation that you don't want to run on every render.
//useMemo: Avoids unnecessary recalculations of expensive computations
//difference compared to useEffect: run during rendering while useEffect runs after rendering; function in useMemo is synchronous while in useEffect is aysnchronous or callback function, 
//Purpose: useEffect for side effects, useMemo for expensive computations.