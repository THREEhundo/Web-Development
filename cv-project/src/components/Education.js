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
      handleDelete,
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
        <form onSubmit={handleSubmit}>
          {inputs}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  hideDiv = (props) => (props ? "hide" : "");

  hideInput = (props) => (props ? "" : "hide");

  // removeEducation = (e, props) => {
  //   const arr = [...props.education];
  //   const index = arr.indexOf(e.target.value)
  //   if (index!== -1) {
  //     const newArr = arr.filter(item, id => )
  //     this.setState({
  //       education: arr
  //     })
  //   }
  // }
}

export default Education;

/*
create a delete button
event listener
delete school info from array
*/
