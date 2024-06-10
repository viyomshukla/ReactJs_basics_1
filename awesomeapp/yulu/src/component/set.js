import React from "react";

class Pratice extends React.Component {
  constructor(props) {  // Correct constructor signature
    super(props);  // Call to super with props
    this.state = {
      name: "virat",
      hobbies: "cricket"
    };
  }

  func = () => {
    this.setState({       // change props using setstate
      name: "viyom",
      hobbies: "football"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.hobbies}</h1>
        <button onClick={this.func}>Click</button>
      </div>
    );
  }
}

export default Pratice;
