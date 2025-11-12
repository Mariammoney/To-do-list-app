import React from 'react'
import "./CreateTask.css"

const CreateTask = () => {
  return (
   <form className='create-task-form'>
    <input 
    type="text" 
    placeholder='create a new task' />
    <button type='submit'>
        Add Task

    </button>

   </form>
  )
}

export default CreateTask
