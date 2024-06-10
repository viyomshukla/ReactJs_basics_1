import React, { useState } from "react";
function Useobj(){
    const obj1={
        name:"viyom shukla",
        occupation:"student",
        college:"JIIT Noida"
    }
    const [a,b]=useState(obj1);
    const handleChange=()=>{
        b((prev)=>{
            return{
                ...prev,
                name:"aryan"
            }
            // name: "Nihil",
            // occupation: "Student",
            // college: "KIIT",
            
          });
        };
        const handle=()=>{
            b({
            name: "Nihil",
            occupation: "Student",
            college: "KIIT",
        })
        }
    
    return(
        <div>
            <h1>{a.name}</h1>
            <h1>{a.occupation}</h1>
            <h1>{a.college}</h1>
            <button onClick={handleChange}>Change</button>
            <button onClick={handle}>Change</button>
        </div>
    )
}
export default Useobj;