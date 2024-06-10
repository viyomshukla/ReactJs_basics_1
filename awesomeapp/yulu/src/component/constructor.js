import React from "react";
class Consrt extends React.Component{
    constructor(props){
        super(props);
       // this.props.hobbies="football"
       console.log("hello");
    }
    render(){  
    return(
    <div>
        <h1>this is </h1>
        <h1>{this.props.hobbies}</h1>
    </div>
    )
    }
}
export default Consrt;