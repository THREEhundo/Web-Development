import React, { Component } from "react";
import uniqid from "uniqid";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  handleToggle = (e) => {
    const { editable } = this.state;
    this.setState({
      editable: !editable,
    });
  };

  handleEditingDone = (e) => {
    console.log("Handle editing is done");
    if (e.keyCode === 13) {
      this.setState({
        editable: false,
      });
    }
  };

  handleEditingChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  render() {
    const { editable } = this.state;
    const {
      tasks,
      task,
      // editable,
      // handleChange,
      handleDelete,
      // handleEditing,
      // handleEditingDone,
      // handleEditingChange,
    } = this.props;
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
              <li style={viewStyle} onDoubleClick={this.handleToggle}>
                {tasks.indexOf(task) + 1}: {task}
              </li>
              <input
                type="text"
                // defaultValue={task}
                style={editStyle}
                onKeyDown={this.handleEditingDone}
                onChange={this.handleEditingChange}
                value={task}
              />
              <button onClick={handleDelete.bind(this, task)}>Delete</button>
            </div>
          );
        })}
      </ul>
    );
  }
}

class ListItem extends Component {
  constructor() {
    super();
  }
}

export default Overview;
