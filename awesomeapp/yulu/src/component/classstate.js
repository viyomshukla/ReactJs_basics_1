import React, { Component } from "react";
class classstate extends Component{
    constructor(){
        super();
        this.state={
            num:9,
        };
    }
      increment=()=>{
        this.setState((prev)=>({
            num:prev.num+1
        }));
    }
     decrement=()=>{
        this.setState((prev)=>({
            num:prev.num-1}));
    }
    render(){
        return(
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.increment}>increament</button>
                <button onClick={this.decrement}>decreament</button>
            </div>
        )
    }
}
export default classstate;