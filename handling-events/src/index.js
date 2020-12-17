import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Toggle from "./components/Toggle";
import LoggingButton from "./components/LoggingButton";
import LoginControl from "./components/LoginControl";
import Mailbox from "./components/Mailbox";

const messages = ["React", "Re: React", "Re:Re: React"];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Toggle />
    <LoggingButton />
    <LoginControl />
    <Mailbox unreadMessages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
