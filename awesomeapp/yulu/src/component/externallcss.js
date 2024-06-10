import React from "react";
import '../component/external.css'; // Adjust the path according to your project structure

class ExternalLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: props.bool
    };
  }

  func = () => {
    this.setState({ bool: false });
  }

  render() {
    return (
      <div>
        <h1 className="h1">EXTERNAL CSS</h1>
        <button onClick={this.func}>Click</button>
        {this.state.bool ? <h1 className="h1">True State</h1> : <h1 className="h2">False State</h1>}
      </div>
    );
  }
}

export default ExternalLine;
