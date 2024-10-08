import { useLayoutEffect, useState } from "react";



export default function useWindowResize(){
    const[windowSize,setWindowSize] = useState({
        width:0,
        height:0
    })

    function handleResize(){
        setWindowSize({
            width : window.innerWidth,
            height: window.innerHeight
        })
    }
    //useLayout run before all DOM render
    useLayoutEffect(()=>{
        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    })
    return windowSize;
}