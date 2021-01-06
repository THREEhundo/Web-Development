import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const {
    tasks,
    task,
    editable,
    handleChange,
    handleDelete,
    handleEditing,
    handleEditingDone,
    handleEditingChange,
  } = props;
  const viewStyle = {};
  const editStyle = {};
  const bulletLess = {};
  bulletLess.listStyle = "none";

  if (editable) {
    console.log("I can edit.");
    viewStyle.display = "none";
  } else {
    console.log("I cannot edit.");
    editStyle.display = "none";
  }
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div key={uniqid()}>
            <li style={viewStyle} onDoubleClick={handleEditing}>
              {tasks.indexOf(task) + 1}: {task}
            </li>
            <input
              type="text"
              // defaultValue={task}
              style={editStyle}
              onKeyDown={handleEditingDone}
              onChange={handleEditingChange}
              value={task}
            />
            <button onClick={handleDelete.bind(this, task)}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
