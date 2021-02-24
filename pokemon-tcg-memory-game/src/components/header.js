import React from "react";

const Header = (props) => {
  console.log(props.banner.headerImg);
  const banner = <img src={props.banner.headerImg} alt="banner"></img>;
  return <div>{banner}</div>;
};

export default Header;
