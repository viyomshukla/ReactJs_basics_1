import React, { useState } from "react";
function Functionstate(){
    const[num,changenum]=useState(21);
    const increment=()=>{
        changenum(num+1);
    }
    const decrement=()=>{
        changenum(num-1);
    }
    return(
    <div>
    <h1>{num}</h1>
    <button onClick={increment}>increment</button>
    <br></br>
    <br></br>
    <button onClick={decrement}>decrement</button>
    </div>
    )
}
export default Functionstate;