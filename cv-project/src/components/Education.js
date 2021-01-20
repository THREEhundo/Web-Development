import edit from "../edit.png";
import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { education, toggleInput, educationInput } = this.props;

    const view = education.map((info) => {
      return Object.entries(info).map((item, index) => (
        <div key={index}>
          <div>
            <span>{item[0]}: </span>
            {item[1]}
          </div>
        </div>
      ));
    });

    return (
      <div className={this.hideDiv(educationInput)}>
        {view}
        <button>
          <img
            className="edit"
            src={edit}
            alt="editEducation"
            onClick={() => toggleInput("educationInput")}
          />
        </button>
      </div>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default Education;
