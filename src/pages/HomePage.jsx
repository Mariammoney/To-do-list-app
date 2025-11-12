import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import NavComponent from '../components/NavComponent'
import CreateTask from '../components/CreateTask'
import Todo from '../components/Todo'

const HomePage = () => {

  const [TodosArray, setTodosArray] = useState([]);

  const dummyTodos = [
    {
      id:1,
      task: "Wash Clothes",
      status: "Pending",
      scheduleTime: "10:00 AM"
    },
    {
      id: 2,
      task: "Buy Groceries",
      status: "In Progress",
      scheduleTime: "1:00 PM"
    },
    {
      id: 3,
      task: "Read a Book",
      status: "Completed",
      scheduleTime: "3:00 PM"
    },
    {
      id: 4,
      task: "Exercise",
      staus: "Pending",
      scheduleTime: "6:00 PM"
    },
     {
      id: 5,
      task: "Clean the house",
      staus: "In progress",
      scheduleTime: "8:00 PM"
    },
    
  ]
  useEffect(() => {
    setTodosArray (dummyTodos);
  }, []);


  return (
    <div className='homepage'>
     <NavComponent/>


     <main>

     <CreateTask/>
     <div className='todos-wrapper'>
      {
        TodosArray.map((todo) => (
            <Todo todoData={todo} />

        ))
      }


     </div>
     
     </main>



    </div>
  )
}

export default HomePage
