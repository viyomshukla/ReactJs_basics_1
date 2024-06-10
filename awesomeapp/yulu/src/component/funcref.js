import React, { useEffect, useRef } from "react";
function Funcref(){
    const nameref=useRef();
    useEffect(()=>{
        console.log("useref" ,nameref);
    })
    const handlesubmit=(e)=>{
     e.preventDefault();
    console.log( nameref.current.value);
    nameref.current.style.color="red";

    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>Enter the name</label>
                <input type="text" placeholder="name" ref={nameref}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Funcref;