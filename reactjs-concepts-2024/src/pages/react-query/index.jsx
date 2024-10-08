import { addNewProduct, fetchListOfProducts } from "./api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from 'react-toastify';
function ReactQueryDemo(){
    const getQueryClient = useQueryClient();
 //By wrapping it in an arrow function, you're ensuring that it's not called immediately but only when React Query needs to execute it.
 // useQuery can be used to fetch data from database
    const {data : productList,isLoading: isProductListLoading} = useQuery({
        queryKey :["productList"],
        queryFn: () => fetchListOfProducts(),
    });

    //useMutation is a hook provided by React Query for handling data mutations (create, update, delete operations) in your React applications.
    //useMutation takes an object as its argument with properties: mutationFn: The function that performs the mutation- called when the mutation is triggered,should be an async function; onSuccess: A callback function that runs when the mutation is successful.
    //useMutation returns an object with properties: mutateAsync: An asynchronous function that triggers the mutation.
    //mutateAsync: An async version of mutate that returns a promise.useMutation wraps addNewProduct function and returns an object including mutateAsync
    const {mutate : handleAddNewProductMutation,isLoading: isAddingProduct} = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            getQueryClient.invalidateQueries(["productList"]) // this is to get the latest list of products
       //This tells React Query that the data for these queries is now potentially out of date.
       //effect: mark productList query as stale, refetch the data if its currently used
       toast.success("Product added successfully!");
       setProductTitle(""); //Prevent accidental resubmission, Clear the input field,Avoid confusion that if their action was successful or if they need to submit again
        },
        onError: (error) => {
            toast.error(`Failed to add product: ${error.message}`);
          }
    })

    function handleAddNewProduct(){
        if (productTitle.trim() !== "") {
             handleAddNewProductMutation(productTitle);
        }
    }

    const [productTitle,setProductTitle] = useState('');
    if (isProductListLoading) return <h1>Loading products. Please wait</h1>
    return(
        <div>
            <h1>React Query Demo</h1>
            <div>
                <input value={productTitle} name='name' placeholder="enter product title" onChange={(event)=>setProductTitle(event.target.value)}/>
                <button onClick={handleAddNewProduct} disabled ={productTitle.trim()==="" ||isAddingProduct} type="button">
                {isAddingProduct ? "Adding..." : "Add Product"}
                </button>
            </div>
            <ul>
                {
                    productList?.length>0?
                    productList.map(product => <li key={product.id}>{product.title}</li>)
                    : <h3>No product found</h3>
                }
            </ul>
        </div>
    );
}

export default ReactQueryDemo;