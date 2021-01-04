import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleDelete = (itemToBeDeleted) => {
    const updatedArr = this.state.tasks.filter((_item) => {
      return _item != itemToBeDeleted;
    });

    this.setState({
      tasks: updatedArr,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task: </label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            // value={task}
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview
          className="style"
          tasks={tasks}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
