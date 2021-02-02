import edit from "../edit.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../App.css";
import React from "react";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      workInput,
      toggleInput,
      handleWorkChange,
      handleSubmit,
      workExperience,
    } = this.props;

    return (
      <Container className="outline" fluid="sm">
        <Row xs={1} className={this.hideDiv(workInput)}>
          {Object.entries(workExperience).map((info, index) => (
            <Col key={index} id={info[0] + "View"}>
              <span>{info[1]}</span>
            </Col>
          ))}
          <Row>
            <Col>
              <Button id="workInputBtn" variant="outline-success">
                <img
                  className="edit"
                  src={edit}
                  alt="editCareer"
                  onClick={() => toggleInput("workInput")}
                />
              </Button>
            </Col>
          </Row>
        </Row>
        <Form
          id="workForm"
          className={this.hideForm(workInput)}
          onSubmit={handleSubmit}
        >
          {Object.entries(workExperience).map((info, index) => (
            <Form.Group controlId={info[0] + "Form"} key={index}>
              <Form.Label>{info[0]}:</Form.Label>
              <Form.Control
                type="text"
                placeholder={info[1]}
                value={info[1]}
                name={info[0]}
                key={index}
                onChange={handleWorkChange}
              />
              <Form.Text />
            </Form.Group>
          ))}
          <Button type="submit" value="Submit" variant="outline-success">
            ✅
          </Button>
        </Form>
      </Container>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideForm = (props) => (props ? "" : "hide");

  insertDash = () => {
    const date = document.querySelector("#fromView");
    const dash = document.createElement("span");
    dash.innerHTML = "-";
    date.appendChild(dash);
    console.log(dash);
  };
}

export default WorkExperience;
