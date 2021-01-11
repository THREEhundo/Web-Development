import edit from "../edit.png";
import "./ContactMe.css";
import React from "react";

class ContactMe extends React.Component {
  render() {
    const { name, email, handleChange, cell, input } = this.props;

    if (this.props.input) {
    }
    return (
      <div>
        <h4>Contact Me</h4>
        <div className={this.hideElement()}>
          {name}
          <button>
            <img
              className="edit"
              src={edit}
              alt="editField"
              onClick={this.props.toggleInput}
            />
          </button>
          <form id="name" onSubmit={this.handleSubmit}>
            <input
              value={this.props.fullName}
              id="fullName"
              type="text"
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
            {/* <button>Cancel</button> */}
          </form>
        </div>
        <div>{this.formatPhone(cell)}</div>
        <div>{email}</div>
        <form id="contactInfo">
          <label>Number</label>
          <input type="tel" />
          <label>Email</label>
          <input type="email" />
        </form>
      </div>
    );
  }

  formatPhone = (props) => {
    const cell = props;
    const areaCode = cell.slice(0, 3);
    const three = cell.slice(3, 6);
    const four = cell.slice(6, 9);
    return areaCode.concat("-", three).concat("-", four);
  };

  hideElement = () => (this.props.input ? "red" : "blue");
}

export default ContactMe;
