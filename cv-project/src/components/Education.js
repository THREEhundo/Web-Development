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
      handleSubmit,
    } = this.props;

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
    console.log(education);
    const inputs = education.map((info) => {
      return Object.entries(info).map((item, index) => (
        <div>
          <div key={index}>
            <label>{item[0]}: </label>
            <input name={item[0]} value={item[1]} onChange={handleChange} />
          </div>
        </div>
      ));
    });

    return (
      <div>
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
        <form onSubmit={handleSubmit}>
          {inputs}
          {/* <input type="submit" value="Submit" /> */}
        </form>
        <form onSubmit={handleSubmit}>
          {inputs}
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default Education;
