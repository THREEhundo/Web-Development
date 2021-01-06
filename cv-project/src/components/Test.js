import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFormChange(e) {
    this.props.handleFormChange(e);
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
            id="firstName"
            value={this.props.firstName}
            onChange={this.handleFormChange}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={this.props.lastName}
            onChange={this.handleFormChange}
          ></input>
        </div>
        <div>
          <button
            className={this.renderButtonColor}
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
