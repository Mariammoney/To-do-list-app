import React, { useState } from 'react'
import "./CreateTask.css"

const CreateTask = (props) => {
  const [newTask, setNewTask] = useState("");
  const [newTime, setNewTime] = useState(null);

  const formSubmit = (e) => {
    e.preventDefault();

    console.log("New Task Created:", newTask);

    props.taskAdderProps({
      id: Date.now(),
      task: newTask,
      staus: "pending",
      scheduleTime: `${newTime} AM`,
    });
  

    setNewTask("");
    setNewTime("");

  };

  
  return (
   <form  onSubmit={formSubmit} className='create-task-form'>

    <input type="text" 
    value={newTask} 
    onChange={(e)=>setNewTask(e.target.value)} 
    placeholder='create a new task' />

    <input 
    type="time"
    value ={newTime}
    onChange={(e)=>setNewTime(e.target.value)}

    />
    
    <button type='submit'>
        Add Task

    </button>

   </form>

  )
}

export default CreateTask
