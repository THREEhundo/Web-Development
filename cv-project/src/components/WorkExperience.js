import edit from "../edit.png";
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
      <div>
        <div className={this.hideDiv(workInput)}>
          {Object.entries(workExperience).map((info, index) => (
            <div key={index}>
              <span>{info[0]}</span>
              <br />
              <span>{info[1]}</span>
            </div>
          ))}
          <button>
            <img
              className="edit"
              src={edit}
              alt="editCareer"
              onClick={() => toggleInput("workInput")}
            />
          </button>
        </div>
        <form className={this.hideInput(workInput)} onSubmit={handleSubmit}>
          {Object.entries(workExperience).map((info, index) => (
            <label key={index}>
              {info[0]}:
              <input
                value={info[1]}
                name={info[0]}
                type="text"
                key={index}
                onChange={handleWorkChange}
              />
            </label>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default WorkExperience;
