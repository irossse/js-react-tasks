import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      newTask: ''
    }
  }

  handleChange =(e)=> {
    this.setState({ newTask: e.target.value })
  }

  handleSub=(e)=> {
    e.preventDefault()
    const { newTask, tasks } = this.state
    const task = {
      id: uniqueId(),
      text: newTask
    }

    this.setState({
      tasks: [task, ...tasks],
      newTask: ''
    })
  }

  handleRemove =(id)=> {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  render() {
    const { tasks, newTask } = this.state
    return (
      <div>
    <div className="mb-3">
    <form className="d-flex" onSubmit={this.handleSub}>
    <div className="me-3">
    <input type="text" value={newTask} onChange={this.handleChange} required className="form-control" placeholder="I am going..."/>
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>

        {tasks.map(task => (
          <Item
            key={task.id}
            task={task}
            onRemove={this.handleRemove}
          />
        ))}
      </div>
    )}}
// END
