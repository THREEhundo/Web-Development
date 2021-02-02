import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import edit from "../edit.png";
import "./ContactMe.css";
import "../App.css";
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
      <Container className="outline offSetTop" fluid="sm">
        <h4>Contact Me</h4>
        <div>
          <div className={this.hideDiv(contactInput)} id="name">
            {name}
            <Button id="editContactBtn" variant="outline-success">
              <img
                className="edit"
                src={edit}
                alt="editField"
                onClick={() => toggleInput("contactInput")}
              />
            </Button>
          </div>
          <Form
            id="contactForm"
            onSubmit={handleSubmit}
            className={this.hideInput(contactInput)}
          >
            <Form.Group className="">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder={name}
                onChange={handleChange}
                value={name}
                name="fullName"
                id="fullNameInput"
              />
              <Form.Text />
            </Form.Group>
            <Form.Group className="">
              <Form.Label>Number:</Form.Label>
              <Form.Control
                type="tel"
                placeholder={cell}
                value={cell}
                onChange={handleChange}
                name="cell"
                id="cell"
              />
              <Form.Text />
            </Form.Group>
            <Form.Group className="">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={email}
                value={email}
                name="email"
                id="email"
                onChange={handleChange}
              />
              <Form.Text />
            </Form.Group>

            <Button type="submit" value="Submit" variant="outline-success">
              ✅
            </Button>
          </Form>
        </div>
        <div className={this.hideDiv(contactInput)}>
          📱
          {this.formatPhone(cell)}
        </div>
        <div className={this.hideDiv(contactInput)}>📧 {email}</div>
      </Container>
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
