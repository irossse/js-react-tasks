import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  state = {tasks: [],text: ''}
  async componentDidMount() {
    const resp = await axios.get(routes.tasksPath())
    this.setState({ tasks: resp.data })
  }


  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }



  handleSubmit = async (e) => {
    e.preventDefault()
    const { text, tasks } = this.state
    const resp = await axios.post(routes.tasksPath(), { text })
    this.setState({
      tasks: [...tasks, resp.data], text: ''})
  }



  handleTaskClick = async (task) => {
    const { tasks } = this.state
    const path = task.state === 'active'? routes.finishTaskPath(task.id): routes.activateTaskPath(task.id)
    const resp = await axios.patch(path)
    const index = tasks.findIndex((item) => item.id === task.id)
    const newTasks = update(tasks, {
      [index]: {
        $set: resp.data
      }
    })

    this.setState({ tasks: newTasks })
  }

  renderTasks(tasks) {
    return tasks.map((task) => (
      <Item
        key={task.id}
        task={task}
        onClick={this.handleTaskClick}
      />
    ))
  }

  render() {
    const { tasks, text } = this.state
    const activeTasks = tasks.filter(
      (task) => task.state === 'active'
    )
    const finishedTasks = tasks.filter(
      (task) => task.state === 'finished'
    )

    return (
      <div>
        <div className="mb-3">
          <form
            className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input type="text" value={text} required
                className="form-control me-3" placeholder="I am going..." onChange={this.handleChange}
              />


              <button type="submit" className="btn btn-primary">
                add
              </button>
            </div>
          </form>
        </div>


        {activeTasks.length > 0 && (
          <div className="todo-active-tasks">
            {this.renderTasks(activeTasks)}
          </div>
        )}


        {finishedTasks.length > 0 && (
          <div className="todo-finished-tasks">
            {this.renderTasks(finishedTasks)}
          </div>
        )}
      </div>
    )}}
// END
