import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onClick }) => {
  const { id, text, state } = task
  const link = (
    <a href="#" className="todo-task" onClick={(e) => { 
        e.preventDefault()
        onClick(task)
}}>{text}
</a>)

  return (
    <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        {state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  )
}
export default Item
// END
