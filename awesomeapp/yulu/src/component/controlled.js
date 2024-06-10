import React, { Component } from "react";

class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      formcolor:false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", this.state.name);
    console.log("Email:", this.state.email);
    this.setState({
        formcolor:true
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
        
            onChange={this.handleChange}
            style={{color:this.state.formcolor?"red":"black"}}
          />
          <br /><br />
          <label>Enter your email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Controlled;
