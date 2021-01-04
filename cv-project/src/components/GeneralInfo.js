// import "../App.css";
// import React from "react";
//
// class GeneralInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange.bind(this);
//   }
//
//   handleChange(e) {
//     this.props.firstName(e.target.value);
//   }
//   // Contact Info
//   render() {
//     const { editName, handleNameClicked } = this.props;
//
//     return (
//       <div>
//         Your Name
//         <YourName onClick={handleNameClicked} />
//         <NameInputs editName={editName} />
//       </div>
//     );
//   }
// }
//
// function YourName(props) {
//   return (
//     <input
//       type="image"
//       alt="edit-name"
//       src="./edit.png"
//       className="edit-btn"
//       onClick={props.handleNameClicked}
//     ></input>
//   );
// }
//
// function NameInputs(props) {
//   if (props.editName) {
//     return <FirstNameInput handleNameClicked={props.handleNameClicked} />;
//   }
//   return <div></div>;
// }
//
// function FirstNameInput(props) {
//   return (
//     <input
//       type="text"
//       name="edit-first-name"
//       handleNameClicked={props.handleNameClicked}
//     ></input>
//   );
// }
//
// export default GeneralInfo;
