import React, { useContext } from "react";
import { namecontext } from "../App";
function Comp3(props){
    const a=useContext(namecontext);
    return(
       
        <div>
            {/* <h1>{props.name}</h1> */}
            <h1>{a}</h1>
        </div>
    )
}
export default Comp3;