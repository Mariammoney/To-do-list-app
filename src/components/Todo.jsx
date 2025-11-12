import React from 'react'
import "./Todo.css"
const Todo = (props) => {
  return (
    <div className='Todo'>
      <div className='task'>
       {props.todoData.task}
      </div>

      {/* <div className='status'>
        {props.todoData.status}
      </div> */}

      <div className='scheduleTime'>
        {props.todoData.scheduleTime}
      </div>

      <div className='todo-button-flex'>
        <button>Edit</button>
        <select value={props.todoData.status}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
        </select>
        <button>Delete</button>

      </div>

    </div>
  )
}

export default Todo
