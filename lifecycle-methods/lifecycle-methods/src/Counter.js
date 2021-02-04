import React from "react";

const ErrorComponent = () => <div>{props.ignore}</div>;

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    // Allows us to copy props to state
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    // This is where you fetch data when initializing ie. network request & show spinner while loading content
    console.log("Component Did Mount");
    console.log("-------------------");
    setTimeout(() => {
      this.setState({ initializing: false });
    }, 500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      console.log("-------------------");

      return false;
    }
    console.log("Should Component Update - RENDER");
    console.log("-------------------");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot Before Update");
    console.log("-------------------");

    return null;
  }

  render() {
    console.log("Render");

    if (this.state.initializing) {
      return <div>initializing...</div>;
    }

    if (this.props.showErrorComponent && this.state.error) {
      return (
        <div>We have encountered an error! {this.state.error.message}</div>
      );
    }

    return (
      <div>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Subtract</button>
        <h1 className="counter">Counter: {this.state.counter}</h1>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
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

  componentDidCatch(error, info) {
    console.log("Component Did Catch");
    console.log("-------------------");

    this.setState({ error, info });
  }
}

export default Counter;
