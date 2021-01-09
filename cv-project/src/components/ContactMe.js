import edit from "../edit.png";
import "./ContactMe.css";
import React from "react";

class ContactMe extends React.Component {
  formatPhone = (props) => {
    const cell = props;
    const areaCode = cell.slice(0, 3);
    const three = cell.slice(3, 6);
    const four = cell.slice(6, 9);
    return areaCode.concat("-", three).concat("-", four);
  };
  render() {
    const { name, email, handleChange, cell } = this.props;
    return (
      <div>
        <h4>Contact Me</h4>
        <div>
          {name}
          <button>
            <img className="edit" src={edit} alt="editField" />
          </button>
        </div>
        <div>{this.formatPhone(cell)}</div>
        <div>{email}</div>
        <form id="name" onSubmit={this.props.handleSubmit}>
          <input id="fullName" type="text" onChange={handleChange} />
        </form>
        <form id="contactInfo">
          <label>Number</label>
          <input type="tel" />
          <label>Email</label>
          <input type="email" />
        </form>
      </div>
    );
  }
}

export default ContactMe;
