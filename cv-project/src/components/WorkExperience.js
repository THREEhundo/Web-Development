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
    // console.log(aa);
    // const {
    //   company,
    //     city,
    //     from,
    //     to,
    //     role,
    //     description,
    // } = this.props.workExperience;
    return (
      <div>
        <div>
          {Object.entries(workExperience).map((info, index) => (
            <div key={index}>
              <p>{info[0]}</p>
              <p>{info[1]}</p>
            </div>
          ))}
        </div>
        {/* {workExperience.company} */}
      </div>
    );
  }
}

export default WorkExperience;
