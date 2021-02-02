import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      education,
      toggleInput,
      educationInput,
      handleChange,
      handleDelete,
      educationForm,
      handleSubmit,
    } = this.props;

    const view = education.map((info) => {
      let index = education.indexOf(info);
      const schools = Object.entries(info).map((item, index) => (
        <div key={index}>
          <div>
            <span>{item[0]}: </span>
            {item[1]}
          </div>
        </div>
      ));
      return (
        <Container className="outline" fluid="sm" key={index}>
          {schools}
          <Button
            className="schoolBtn"
            id={index}
            onClick={handleDelete}
            variant="outline-warning"
          >
            ❌
          </Button>
        </Container>
      );
    });

    const EduArr = (
      <Form id="educationInput" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label id="school">School: </Form.Label>
          <Form.Control
            name="school"
            onChange={handleChange}
            value={educationForm.school}
          />
          <Form.Text />
        </Form.Group>
        <Form.Group>
          <Form.Label id="city">City: </Form.Label>
          <Form.Control
            name="city"
            onChange={handleChange}
            value={educationForm.city}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="from">From: </Form.Label>
          <Form.Control
            name="from"
            onChange={handleChange}
            value={educationForm.from}
          />
          <Form.Text />
        </Form.Group>
        <Form.Group>
          <Form.Label id="to">To: </Form.Label>
          <Form.Control
            name="to"
            onChange={handleChange}
            value={educationForm.to}
          />
          <Form.Text />
        </Form.Group>
        <Form.Group>
          <Form.Label id="degree">Degree: </Form.Label>
          <Form.Control
            name="degree"
            onChange={handleChange}
            value={educationForm.degree}
          />
          <Form.Text />
        </Form.Group>
        <Button type="submit" value="Submit" variant="outline-success">
          ✅
        </Button>
      </Form>
    );

    return (
      <Container id="educationContainer" className="offSetBtm">
        <div className={this.hideDiv(educationInput)}>
          {view}
          <Button
            className="schoolBtn"
            id="addSchoolBtn"
            variant="outline-success"
            onClick={() => toggleInput("educationInput")}
          >
            ➕
          </Button>
        </div>
        <Container
          id="educationForm"
          className={this.hideInput(educationInput)}
        >
          {EduArr}
        </Container>
      </Container>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default Education;
