import React from "react";

/*
Inline If with Logical && Operator
  You can embed expression in JSX by wrapping them in curly braces.
  This includes the JS logical && operator. It can be handy for conditionally including an element:
*/

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
export default Mailbox;

/*
  It works because in JS,
  true && expression always evaluates to expression,
  and false && expression always evaluates to false.

  If the condition is true, the element right after && will appear in the output.
  If the condition is false, React will ignore and skip it.

  ***Note***
  Returning a falsy expression will still cause the element after && to be skipped but will return a falsey expression.
  In the example below, <div>0</div> will be returned by the render method.

    render() {
    const count = 0;
    return (
    <div>
      { count && <h1>Messages: {count}</h1> }
    </div>
  )
  }
*/

/*
Inline If-else w/ Conditional Operator
  Another method for conditionally rendering elements inline is to use the JS conditional operator - condition ? true : false

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
      </div>
    )
  }

  It can be also used for larger expressions although it is less obvious what's going on:

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn
          ? <LogoutButton onclick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    )
  }

  Just like in JS, it is up to you to choose an appropriate style based on what you and your team consider more readable.
  Also, when components become too complex, it might be a good time to extract a component.
*/

/*
Preventing Component from Rendering
  In rare cases you want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

  In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component doesn't render:
*/

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
