import "./App.css";
import React from "react";
import Test from "./components/Test";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Samuel",
      lastName: "Baik",
      counter: 0,
      isValid: false,
    };
  }

  logFields = () => {
    const { firstName, lastName } = this.state;
    console.log("Full name: ", `${firstName} ${lastName}`);
  };

  handleFormChange = (e) => {
    const { checked, name, value, type } = e.target;
    const valueToUpdate = type === "checkbox" ? checked : value;
    this.setState(
      {
        [name]: valueToUpdate,
        counter: this.state.counter + 1,
      },
      () => {
        this.logFields();
      }
    );
    this.handleCounter();
  };

  handleCounter = () => {
    this.setState(incrementCounter("counter"));
  };

  handleIsValid = () => {
    this.setState(toggleKey("isValid"));
    this.handleCounter();
  };

  renderButtonColor = () => {
    return this.state.isValid ? "btn btn-danger" : "btn btn-success";
  };

  render() {
    // let e;
    return (
      <div className="mt-3 text-center">
        <h2>Resume App</h2>
        {/* <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={this.handleFormChange}
          />
          </div>
          <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" onChange={this.handleFormChange} />
          </div>
          <div>
          <button
            className={this.renderButtonColor()}
            onClick={this.handleIsValid}
          >
            {this.state.isValid ? "Invalidate" : "Validate"}
          </button>
        </div> */}
        <Test
          value={(this.state.firstName, this.state.lastName)}
          handleFormChange={this.handleFormChange}
          renderButtonColor={this.renderButtonColor}
          handleIsValid={this.handleIsValid}
          isValid={this.state.isValid}
        />
      </div>
    );
  }
}

const toggleKey = (key) => (state) => {
  return {
    [key]: !state[key],
  };
};

const incrementCounter = (key) => (state) => {
  return {
    [key]: state[key] + 1,
  };
};

export default App;
