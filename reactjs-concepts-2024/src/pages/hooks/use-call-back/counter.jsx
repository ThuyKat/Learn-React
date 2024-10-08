import { memo } from "react";
function Counter({countValue,onClick}){
    console.log("this is going to be rendered",countValue,onClick);
    //first render: this function is rendered twice, one for each click button
    // click onto one of the button, both are rendered -> we wants to just render one time not two
    return (
        <div>
            <p>{countValue}</p>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

export default memo(Counter);
//memo: optimize rendering of counter by memorizing rendered output base on props
//react compares current props with previous props to decide if it should re-render Counter
//if the props hasnt change, React will reuse the last rendered output instead of re-rendering the component
//internally, memo use shallow comparision of props to check if props are same using Object.is()