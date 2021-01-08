import "./App.css";
import React from "react";
import Heading from "./components/Heading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      cell: "",
      email: "",
    };
  }
  render() {
    return <Heading />;
  }
}

export default App;
