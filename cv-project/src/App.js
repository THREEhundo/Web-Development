import "./App.css";
import React from "react";
import Heading from "./components/Heading";
import ContactMe from "./components/ContactMe";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education.js";

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
      education: [
        {
          school: "Cornell University",
          city: "Ithica, NY",
          from: 1978,
          to: 1982,
          degree: "Bachelor of Science",
        },
        {
          school: "Yale University",
          city: "New Haven, CT",
          from: 1983,
          to: 1985,
          degree: "Master of Engineering",
        },
      ],
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
        <Education />
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
