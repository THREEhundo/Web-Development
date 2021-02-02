import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
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
          role: "4th Grade Teacher",
          company: "Springfield Elementary School",
          city: "Springfield, OR",
          from: 1989 + " -",
          to: "Present",
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
      educationForm: {
        school: "",
        city: "",
        from: "",
        to: "",
        degree: "",
      },
      educationInput: false,
    };
  }

  render() {
    return (
      <div>
        <Heading />
        <Container id="appContainer" fluid="sm">
          <div className="module">
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
            <Education
              education={this.state.education}
              educationForm={this.state.educationForm}
              toggleInput={this.toggleInput}
              educationInput={this.state.educationInput}
              handleChange={this.handleEducationChange}
              handleDelete={this.handleDelete}
              handleSubmit={this.submitEducation}
              className="offSetBtm"
            />
          </div>
        </Container>
      </div>
    );
  }

  handleDelete = (e) => {
    let index = parseInt(e.target.id);

    this.setState({
      education: this.state.education.filter((_, i) => i !== index),
    });
  };

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
    const value = e.target.value;
    const id = e.target.name;
    let item;
    let workExperience = [...this.state.workExperience];
    if (id === "from") {
      item = {
        ...workExperience[0],
        [id]: value + " - ",
      };
    }
    item = {
      ...workExperience[0],
      [id]: value,
    };
    console.log(id);
    console.log(value);
    this.setState({ workExperience: [item] });
  };

  handleEducationChange = (e) => {
    const { value, name } = e.target;
    const educationForm = { ...this.state.educationForm };
    this.setState({
      educationForm: { ...educationForm, [name]: value },
    });
  };

  submitEducation = (e) => {
    e.preventDefault();
    const eduForm = this.state.educationForm;
    const edu = [...this.state.education];
    this.setState({
      education: [...edu, eduForm],
      educationInput: false,
      educationForm: {
        school: "",
        city: "",
        from: "",
        to: "",
        degree: "",
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let input;
    e.target.id === "contactForm"
      ? (input = "contactInput")
      : e.target.id === "workForm"
      ? (input = "workInput")
      : (input = "educationInput");
    this.setState({
      [input]: false,
    });
  };
}

export default App;
