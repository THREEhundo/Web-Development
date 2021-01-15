import "./App.css";
import React from "react";
import Heading from "./components/Heading";
import ContactMe from "./components/ContactMe";
import WorkExperience from "./components/WorkExperience";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Ned Flanders",
      cell: "7189005000",
      email: "nedflanders@gmail.com",
      contactInput: false,
      workExperience: [
        {
          company: "Springfield Elementary School",
          city: "Springfield, OR",
          from: 1989,
          to: "Present",
          role: "4th Grade Teacher",
          description: "Bart Simpson's teacher",
        },
      ],
      workInput: false,
    };
  }

  render() {
    return (
      <div>
        <Heading />
        <ContactMe
          name={this.state.fullName}
          cell={this.state.cell}
          email={this.state.email}
          contactInput={this.state.contactInput}
          handleChange={this.handleChange}
          toggleInput={this.toggleInput}
          handleSubmit={this.handleSubmit}
        />
        <WorkExperience
          workExperience={this.state.workExperience[0]}
          handleWorkChange={this.handleWorkChange}
          toggleInput={this.toggleInput}
          workInput={this.state.workInput}
        />
      </div>
    );
  }

  toggleInput = (props) => {
    this.setState({
      [props]: !this.state.props,
    });
  };

  handleChange = (e) => {
    const id = e.target.name;
    this.setState({
      [id]: e.target.value,
    });
  };

  handleWorkChange = (e) => {
    const id = e.target.name;
    console.log(e.target.value);
    this.setState({
      workExperience: [
        {
          [id]: e.target.value,
        },
      ],
    });
  };

  handleSubmit = (e) => {
    this.setState({
      contactInput: false,
    });
    e.preventDefault();
  };
}

export default App;
