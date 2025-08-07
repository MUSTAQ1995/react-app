import { useRef } from "react";

export const useThrottle =(func, delay) =>{
    const flag = useRef(true);
    return function(...args){
        if(flag.current){
            func.apply(this, args)
            flag.current=false;
            console.log("the function is called")
            setTimeout(()=>{
                flag.current=true;
            }, delay )
        }
    }

}