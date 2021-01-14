import edit from "../edit.png";
import "./ContactMe.css";
import React from "react";

class ContactMe extends React.Component {
  render() {
    const {
      name,
      email,
      handleChange,
      cell,
      input,
      handleSubmit,
      toggleInput,
    } = this.props;

    return (
      <div>
        <h4>Contact Me</h4>
        <div>
          <div className={this.hideDiv(input)}>
            {name}
            <button>
              <img
                className="edit"
                src={edit}
                alt="editField"
                onClick={toggleInput}
              />
            </button>
          </div>
          <form
            id="name"
            onSubmit={handleSubmit}
            className={this.hideInput(input)}
          >
            <input
              value={name}
              id="fullName"
              type="text"
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
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

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default ContactMe;
