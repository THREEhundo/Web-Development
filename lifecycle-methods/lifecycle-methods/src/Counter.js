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
    // You can call setState here but does not render twice because of it's location
    console.log("Component Did Mount");
    console.log("-------------------");
    setTimeout(() => {
      this.setState({ initializing: false });
    }, 500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Figure out if render needs to run again because it can be expensive to run when there is nothing to change.
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
    // Store position of ListView or any DOM Component which you can pass to componentDidUpdate and reassign after the render
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
    // Same as componentDidMount, if you want to make component requests you can do that here
    console.log("Component Did Update");
    console.log("-------------------");
  }

  componentWillUnmount() {
    // Used when removing component from the DOM
    console.log("Component Will Unmount");
    console.log("-------------------");
  }

  componentDidCatch(error, info) {
    // Helps catch any errors and prevents a blank screen and shows the error
    console.log("Component Did Catch");
    console.log("-------------------");

    this.setState({ error, info });
  }
}

export default Counter;
