import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskObj: [
        {
          task: "",
          taskId: "",
        },
      ],
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState((state) => {
      state.taskObj.task = e.target.value;
      state.taskObj.taskId = uniqid();
      console.log(state.taskObj);
    });
    // this.setState({
    //   taskObj: [
    //     {
    //       task: e.target.value,
    //       taskId: uniqid(),
    //     },
    //   ],
    // });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState((state) => {
      const task1 = state.taskObj.task;
      const task2 = task1.concat(state.taskObj.taskId);
      const tasks = state.tasks.concat(task2);

      return {
        tasks,
        task: "",
        taskId: "",
      };
    });
  };

  // onSubmitTask = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     tasks: this.state.tasks.concat(this.state.taskObj),
  //     task: "",
  //     taskId: "",
  //   });
  // };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <div>
            <label htmlFor="taskInput">Enter task</label>
            <input
              onChange={this.handleChange}
              value={task}
              type="text"
              id="taskInput"
              className="form-control"
            />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>

        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       list: [
//         { id: '1', age: 42 },
//         { id: "2", age: 33 },
//         { id: '3', age: 68 },
//       ],
//     },
//   };
//
//   onRemoveItem = (id) => {
//     this.setState(state => {
//       const list = state.list.filter(item => item.id !== id)
//
//       return {
//         list,
//       }
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.list.map(item => {
//             <li key={item.id}>
//               The person is {item.age} years old.
//               <button
//                 type="button"
//                 onClick={() => this.onRemoveItem(item.id)}
//               >Remove</button>
//             </li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
