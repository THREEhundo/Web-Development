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
          handleSubmit={this.handleSubmit}
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
    let workExperience = [...this.state.workExperience];
    let item = {
      ...workExperience[0],
      [id]: e.target.value,
    };
    console.log(item);
    // console.log(item);
    this.setState({ workExperience: [item] });
  };

  handleSubmit = (e) => {
    let input;
    e.target.id === "contactInfo"
      ? (input = "contactInput")
      : (input = "workInput");
    this.setState({
      [input]: false,
    });
    e.preventDefault();
  };
}

export default App;
