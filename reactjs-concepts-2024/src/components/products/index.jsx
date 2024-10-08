import ProductItem from "./components/product-item";
import './style.css';
import React, { useState, useEffect } from 'react';


const dummyProductData = ['Product 1','Product 2','Product 3'];
function ProductList(props){
    console.log(props);
    const{name,city,postcode} = props;
    // const flag = false;
    //other option: we gonna use hook ' useState' and initial value is false
    // we can also write: 
    // const initialState = {
    //     flagValue : false
    // } if we have more props of the states to set
    const [flag,setFlag] = useState(false); // this will returns an inital value and a function to update it
    const [count,setCount] = useState(0);
    const [ changeStyle, setChangeStyle] = useState(false);
    // function renderTextBlock(getFlag){
    //     return getFlag?
    //     (<h4> Name is  {name}, from {city}, postcode {postcode}</h4>) : (<h4>Hello world</h4>)

    // }
    // const renderTextBlock = flag?(<h4> Name is  {name}, from {city}, postcode {postcode}</h4>) : (<h4>Hello world</h4>);
    const handleToggleText = () => {
        setFlag(!flag);
    };
    useEffect(() => {
        setFlag(!flag);
        console.log("run only once when page loaded");
        return () => {
            console.log('component is unmounted -> some side effects here also');
        };
    },[]); // this will only run on page load once
    // I will use this to set inital state to true instead of false
    useEffect(() => {
        console.log('count changes');
        if(count === 10) {
            setChangeStyle(true);
        }
        console.log(changeStyle);
    },[count]) // what dependencies you need to keep to make side effect will goes inside []
    const handleIncreaseCount = () => {
        setCount(count + 1);
    };
    return(
        <div>
            <h3 className="title"> ECommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem/> */}
            {
                flag?(<h4> Name is  {name}, from {city}, postcode {postcode}</h4>) : (<h4>Hello world</h4>)
                // renderTextBlock(flag)
                // renderTextBlock
            }
            <div>
                <button style = {{backgroundColor : changeStyle? 'black': 'white', color : changeStyle ? '#ffffff': '#000000'}}onClick ={handleIncreaseCount}>Increase count </button>
                <p>Count is {count}</p>
            </div>
            <ul>
                {
                    dummyProductData.map((item,index)=> (
                    // <li key={index}>{item}</li>
                    <ProductItem singleProductItem={item} key={index} />
                ))
                }
            </ul>
        </div>
    );
}

export default ProductList;