import "../App.css";
import React from "react";

class GeneralInfo extends React.Component {
  // Contact Info
  render() {
    const { nameClicked, handleNameClicked } = this.props;
    let input;

    // nameClicked ? (input = <NameInputs />) : (input = <div>Not clicked</div>);

    if (nameClicked) {
      input = <NameInputs />;
    } else {
      input = <h1> Name Clicked is false</h1>;
    }

    return (
      <div>
        {/* div & edit btn -> name input & check btn & x btn  -> div */}
        <div>
          Your Name
          <input
            type="image"
            alt="edit-first-name"
            src="./edit.png"
            className="edit-btn"
            onClick={handleNameClicked}
          ></input>
          {input}
        </div>

        {/* <label>
          First Name
          <input type="text" onChange={this.props.editFirstName}></input>
        </label> */}
      </div>
    );
  }
}

function NameInputs(props) {
  // const { editFirstName, editLastName } = this.props;
  return (
    <div>
      {/* <input onChange={editFirstName}></input>
      <input onChange={editLastName}></input> */}
      <h1>Working</h1>
    </div>
  );
}

export default GeneralInfo;
