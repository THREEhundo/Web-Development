/*
EXTRACTING A CUSTOM HOOK

When we want to share logic between two JS functions, we extract it to a third function.

A custom Hook is a JS function whose name starts with "use" and that may call other Hookds.
ex.

*/
import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
  return isOnline;
}

/*
USING A CUSTOM HOOK

Our stated goal was to remove the duplicated logic from the FriendStatus and FriendListItem components. Both of them want to know whether a friend is online.
*/

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "loading...";
  }
  return isOnline ? "Online" : "Offline";
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "orange" }}>
      {props.friend.name}
    </li>
  );
}

/*
Two components using the same Hook don't share the same state. Custom Hooks are a mechanism to reuse stateful l,logic (setting subscriptions and remembering the current value), but every timeyou use a Custom Hook, all state and effects inside of it are fully isolated.

Each CALL to a Hook gets isolated a state. Because we call useFriendStatus directly, from React's point of view our component just calls useState and useEffect. And as we learned earlier, we can call useState and useEffect many times in one component, and they will be completely independent.
*/

/*
TIP: PASS INFORMATION BETWEEN HOOKS

Since Hooks are functions, we can pass information between them.
ex. This is a component from our chat example. A chat message recipient picker that displays whether the currently selected friend is online:
*/

const friendList = [
  { id: 1, name: "Phoebe" },
  { id: 2, name: "Rachel" },
  { id: 3, name: "Ross" },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? "green" : "red"} />
      <select
        value={recipientID}
        onChange={(e) => setRecipientID(Number(e.target.value))}
      >
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}
/*
We keep the currently chosen ID in the recipientID state variable, we can pass it to our custom useFriendStatus Hook as an argument:

const [recipientID, setRecipientID] = useState(1);
const isRecipientOnline = useFriendStatus(recipientID);

This lets us know whether the currently selected friend is online. If we pick a different friend and update the recipientID state variable, oure useFriendStatus Hook will unsubscribe from the previously selected friend, and subscribe to the status of the newly selected one.
*/

/*
useYourImagination()

Custom Hooks offer the flexibility of sharing logic that wasn't possible in React components before.

For example, maybe you have a complex component that contains a lot of local state that is managed in an ad-hoc way. useState doesn't make centralizing the update logic any easier so you might prefer to write it as a Redux reducer:
*/

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    // ... other actions ...
    default:
      return state;
  }
}
/*
Reducers are very convenient to test in isolation, and scale to express complex update logic. You can further break them apart into smaller reducers if necessary.

We can manage the local state of our component with a reducer.
*/

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

/*
Now we can use it in our component, and let the reducer drive its state management
*/

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: "add", text });
  }
  // ...
}

/*
The need to manage local state with a reducer in a complex component is common enough that we've built the useReducer Hook right into React. You'll find it together with other built-in Hooks in the Hooks API
*/

/*
useReducer
*/

const [state, dispatch] = useReducer(reducer, initialArg, init);

/*
An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on teh previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

Ex.
*/

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

/*
NOTE
REACT guarantees that dispatch function identity is stable and won't change on re-renders. This is why it's it's safe to omit from the useEffect or useCallback dependency list.
*/
/*
SPECIFYING THE INITIAL STATE
There are two ways to initialize useReducer state. The simplest way is to pass the initial state as a second argument:
*/
const [state, dispatch] = useReducer(reducer, { count: initialCount });
/*
NOTE
React doesn't use the state = initialState argument convention popularized by Redux. The initial value sometimes needs to depend on props and so is specified from the Hook call instead.
*/
