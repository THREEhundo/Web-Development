import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <Container className="outline" fluid="sm">
        <h4>Contact Me</h4>
        <div>
          <div className={this.hideDiv(contactInput)} id="name">
            {name}
            <Button id="editContactBtn" variant="outline-dark">
              <img
                className="edit"
                src={edit}
                alt="editField"
                onClick={() => toggleInput("contactInput")}
              />
            </Button>
          </div>
          <form
            id="contactInfo"
            onSubmit={handleSubmit}
            className={this.hideInput(contactInput)}
          >
            <Row className="justify-content-md-center">
              <Col>
                Name:
                <input
                  value={name}
                  name="fullName"
                  id="fullNameInput"
                  type="text"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                Number:
                <input
                  type="tel"
                  value={cell}
                  name="cell"
                  id="cell"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                Email
                <input
                  type="email"
                  value={email}
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <input type="submit" value="Submit" />
          </form>
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
