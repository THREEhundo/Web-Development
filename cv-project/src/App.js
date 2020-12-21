import "./App.css";
import React from "react";
import Heading from "./components/Heading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      cell: null,
      email: null,
      linkedIn: null,
      workExperience: [
        {
          date: null,
          company: null,
          position: null,
          summary: null,
        },
      ],
      education: [
        {
          date: null,
          school: null,
          degree: null,
        },
      ],
      skills: [],
    };
  }
  render() {
    return <Heading />;
  }
}

export default App;
