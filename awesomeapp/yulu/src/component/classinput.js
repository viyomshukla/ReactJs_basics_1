import React, { Component } from "react";
class Classinput extends Component{
    constructor(props){
        super(props);
        this.state={
            name:" ",
            email:" "
        }
    }
    handlename=(e)=>{
    console.log(e.target.value);
    this.setState({
        name:e.target.value
    })
    }
    handleemail=(e)=>{
        console.log(e.target.value);
        this.setState({
            email:e.target.value
        })
        }
    handlesubmit=(e)=>{
        e.preventDefault() //for stoping from refresh
 
        console.log("Form submitted with values:", this.state);  
        console.log(e.target[0].value);
        console.log(e.target[1].value);
    }
    handle=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>Enter your name</label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handle}></input><br/><br/>
                    <label>Enter your email</label>
                    <input type="email" value={this.state.email} name="email"onChange={this.handle}></input>
                    <br/><br/>
                    <input type="submit"></input>
                
                </form>
            </div>
        )
    }
}
export default Classinput;