import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const { tasks, task, handleDelete } = props;

  return (
    <ul className="style">
      {tasks.map((task) => {
        return (
          <div key={uniqid()}>
            <li>
              {tasks.indexOf(task) + 1}: {task}
            </li>
            <button onClick={handleDelete.bind(this, task)}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
