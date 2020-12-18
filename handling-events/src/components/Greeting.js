import React from "react";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;

/*
Conditional Rendering
  Works the same way it does in JS.
  Use JS operators like if and conditional operators to create elements, and let React update the UI to match them.
*/
