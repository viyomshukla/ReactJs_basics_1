import React, { Component, createRef } from "react";
class Uncontrolled extends Component{
    constructor(props){
        super(props);
        this.nameref=createRef();
        this.emailref=createRef()
        // callback
        this.ageref=null;
        this.setref=(e)=>{
            this.ageref=e;
        }
    }
    componentDidMount(){
    console.log("name",this.nameref);
    console.log("email",this.emailref);
    console.log("age",this.ageref);
    }
    func=(e)=>{
    e.preventDefault();
    console.log(this.nameref.current.value);
    console.log(this.emailref.current.value);
    console.log(this.ageref.value);
    this.emailref.current.style.color = "red";
    this.emailref.current.style.backgroundColor = "black";
    this.ageref.style.color="yellow"
    this.ageref.style.backgroundColor = "black";
    }

    render(){
        return(
            <div>
                <form onSubmit={this.func}>
                    <label>Enter your name</label>
                    <input type="text" placeholder="name"  ref={this.nameref}></input>
                    <br/><br/>
                    <label>Enter your email</label>
                    <input type="email" placeholder="email"  ref={this.emailref}></input>
                    {/* using callback reference */}
                    <br/><br/>
                    <label>Enter your age</label>
                    <input type="number" placeholder="age"  ref={this.setref}></input>
                    <br/><br/>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
export default Uncontrolled;