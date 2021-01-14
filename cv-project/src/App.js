import "./App.css";
import React from "react";
import Heading from "./components/Heading";
import ContactMe from "./components/ContactMe";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Ned Flanders",
      cell: "7189005000",
      email: "nedflanders@gmail.com",
      input: false,
    };
  }

  render() {
    console.log("Render");
    return (
      <div>
        <Heading />
        <ContactMe
          name={this.state.fullName}
          cell={this.state.cell}
          email={this.state.email}
          input={this.state.input}
          handleChange={this.handleChange}
          toggleInput={this.toggleInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }

  toggleInput = () => {
    this.setState({
      input: !this.state.input,
    });
  };

  handleChange = (e) => {
    const id = e.target.id;
    this.setState({
      [id]: e.target.value,
    });
    e.target.value = "";
  };

  handleSubmit = (e) => {
    this.setState({
      input: false,
    });
    e.preventDefault();
  };
}

export default App;
