import React from "react";
const obj1={
        color:"red",
        backgroundColor:"yellow"
}
const obj2={
   fontSize:"20px"
}
class inline extends React.Component{
  
    render(){
        return(
            <div>
            <h1 style={{backgroundColor:"red"}}>Hello World</h1>
            <h1 style={obj1}>Hello World</h1>
            <h1 style={{...obj1,...obj2}}>VIYOM</h1>
            </div>

        )
    }
}
export default inline;