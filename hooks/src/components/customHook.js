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


*/
