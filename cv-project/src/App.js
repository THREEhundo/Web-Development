import "./App.css";
import React from "react";
import Heading from "./components/Heading";
import GeneralInfo from "./components/GeneralInfo";

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
      nameClicked: true,
    };
    this.editFirstName = this.editFirstName.bind(this);
    this.editLastName = this.editLastName.bind(this);
    this.nameInput = this.nameInput.bind(this);
    this.handleNameClicked = this.handleNameClicked.bind(this);
  }

  nameInput = () => {
    return <input type="text"></input>;
  };

  handleNameClicked = () => {
    this.setState({
      nameClicked: true,
    });
  };

  editFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  editLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Heading />
        <GeneralInfo
          editFirstName={this.editFirstName}
          editLastName={this.editLastName}
          handleNameClicked={this.handleNameClicked}
        />
      </div>
    );
  }
}

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    state(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelciusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelciusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default App;
