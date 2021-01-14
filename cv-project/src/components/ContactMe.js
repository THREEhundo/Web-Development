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
      contactInput,
      handleSubmit,
      toggleInput,
    } = this.props;

    return (
      <div>
        <h4>Contact Me</h4>
        <div>
          <div className={this.hideDiv(contactInput)}>
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
            className={this.hideInput(contactInput)}
          >
            <label>
              Name:
              <input
                value={name}
                name="fullName"
                id="fullName"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              Number:
              <input
                type="tel"
                value={cell}
                name="cell"
                id="cell"
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input type="email" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={this.hideDiv(contactInput)}>
          {this.formatPhone(cell)}
        </div>
        <div>{email}</div>
      </div>
    );
  }

  formatPhone = (props) => {
    const cell = props;
    const areaCode = cell.slice(0, 3);
    const three = cell.slice(3, 6);
    const four = cell.slice(6, 10);
    return areaCode.concat("-", three).concat("-", four);
  };

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default ContactMe;
