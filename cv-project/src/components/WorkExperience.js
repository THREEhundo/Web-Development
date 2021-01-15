import edit from "../edit.png";
import React from "react";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { workExperience } = this.props;
    const aa = Object.entries(workExperience);
    const aaa = aa.map((info, index) => {
      console.log(info, index);
      console.log(info[0]);
      console.log(info[1]);
    });

    const {
      workInput,
      toggleInput,
      handleWorkChange,
      handleSubmit,
    } = this.props;
    return (
      <div>
        <div className={this.hideDiv(workInput)}>
          {Object.entries(workExperience).map((info, index) => (
            <div key={index}>
              <p>{info[0]}</p>
              <p>{info[1]}</p>
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
        <form className={this.hideInput(workInput)}>
          {Object.entries(workExperience).map((info, index) => (
            <label key={index}>
              {info[0]}:
              <input
                name={info[0]}
                type="text"
                key={index}
                onChange={handleWorkChange}
              />
            </label>
          ))}
        </form>
      </div>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");
}

export default WorkExperience;
