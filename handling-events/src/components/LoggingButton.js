import React from "react";

class LoggingButton extends React.Component {
  // Syntax ensures `this` is bound within handleClick
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default LoggingButton;
