import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      return false;
    }
    console.log("Should Component Update - RENDER");

    return true;
  }

  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Subtract</button>
        <h1 className="counter">Counter: {this.state.counter}</h1>
      </div>
    );
  }

  componentDidUpdate(prevPros, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("-------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("-------------------");
  }
}

export default Counter;
