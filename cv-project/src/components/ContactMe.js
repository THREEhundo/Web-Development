import React from "react";

class ContactMe extends React.Component {
  formatPhone = (props) => {
    const cell = props;
    console.log(cell);
    const areaCode = cell.slice(0, 3);
    const three = cell.slice(3, 6);
    const four = cell.slice(6, 9);
    return areaCode.concat("-", three).concat("-", four);
  };
  render() {
    return (
      <div>
        <h4>Contact Me</h4>
        <div>{this.props.name}</div>
        <div>{this.formatPhone(this.props.cell)}</div>
        <div>{this.props.email}</div>
      </div>
    );
  }
}

export default ContactMe;
