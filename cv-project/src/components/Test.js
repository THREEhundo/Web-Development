import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFormChange(e) {
    this.props.handleFormChange(this.props.value);
  }

  renderButtonColor() {
    this.props.renderButtonColor();
  }

  handleIsValid() {
    this.props.handleIsValid();
  }

  render(props) {
    return (
      <div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={this.handleFormChange}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={this.handleFormChange}
          ></input>
        </div>
        <div>
          <button
            className={this.renderButtonColor()}
            onClick={this.handleIsValid}
          >
            {this.props.isValid ? "Invalidate" : "Validate"}
          </button>
        </div>
      </div>
    );
  }
}

export default Test;
