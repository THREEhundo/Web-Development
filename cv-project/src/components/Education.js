import edit from "../edit.png";
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
        <div key={index}>
          {schools}
          <button id={index} onClick={handleDelete}>
            Delete
          </button>
        </div>
      );
    });

    const EduArr = (
      <form id="educationInput" onSubmit={handleSubmit}>
        <div>
          <label id="school">School: </label>
          <input
            name="school"
            onChange={handleChange}
            value={educationForm.school}
          />
        </div>
        <div>
          <label id="city">City: </label>
          <input
            name="city"
            onChange={handleChange}
            value={educationForm.city}
          />
        </div>
        <div>
          <label id="from">From: </label>
          <input
            name="from"
            onChange={handleChange}
            value={educationForm.from}
          />
        </div>
        <div>
          <label id="to">To: </label>
          <input name="to" onChange={handleChange} value={educationForm.to} />
        </div>
        <div>
          <label id="degree">Degree: </label>
          <input
            name="degree"
            onChange={handleChange}
            value={educationForm.degree}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );

    return (
      <div>
        <div className={this.hideDiv(educationInput)}>
          {view}
          <button variant="primary">
            <img
              className="edit"
              src={edit}
              alt="editEducation"
              onClick={() => toggleInput("educationInput")}
            />
          </button>
        </div>
        <div className={this.hideInput(educationInput)}>{EduArr}</div>
      </div>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default Education;
