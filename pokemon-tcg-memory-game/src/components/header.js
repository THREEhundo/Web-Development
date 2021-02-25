import React from "react";

const Header = (props) => {
  const banner = <img src={props.banner.headerImg} alt="banner"></img>;

  return <div>{banner}</div>;
};

export default Header;
