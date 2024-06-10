import React, { Component } from "react";
import Child from "./ChildComponenet";
class parent extends Component{
    func=(p)=>{
        alert("hello  "+p)
    }
    render(){
        return(
       <div>
       <Child callMethod={this.func}></Child>
       </div>
        )
    }
}
export default parent;