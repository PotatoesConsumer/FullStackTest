import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  function editTodo() {

  }
  function deleteTodo() {

  }
  function createTodo() {
    setTodos ([
      {
        id: 1,
        name: 'Learn Frontend',
        success: false,
      },
      {
        id: 2,
        name: 'Learn Backend',
        success: false,
      },
    ])
  }
  function showTodo() {

  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-blue-100'>
      <div className='bg-white w-250 h-100 p-5 rounded-xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]'>
        <div className='flex justify-center mt-5 mb-10'>
          <input id='input' type="text" className='border-1 w-75 mr-5 p-1' placeholder='Input'/>
          <button className='bg-black text-white py-2 px-5 rounded-xl cursor-pointer' onClick={createTodo}>Add</button>
        </div>
        <div className=''>
          {todos.map((todo) => {
            return (
              <div className='flex flex-row justify-evenly items-center mb-5'>
                <h1>{todo.name}</h1>
                <h1 className={todo.success == true ? "text-green-800" : "text-red-800"}>{todo.success == true ? "DONE" : "Not DONE"}</h1>
                <button onClick={editTodo} className='bg-black text-white py-1 px-3 rounded-lg cursor-pointer'>Edit</button>
                <button onClick={showTodo} className='bg-green-700 text-white py-1 px-3 rounded-lg cursor-pointer'>Complete</button>
                <button onClick={deleteTodo} className='bg-red-700 text-white py-1 px-3 rounded-lg cursor-pointer'>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
