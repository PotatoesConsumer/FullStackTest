import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  function editTodo(todo, id) {
    setName(todo.name);
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, edit: true, success: false} : todo
      )
    );
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  function createTodo() {
    let newTodo = {
      id: todos.length + 1,
      name: name,
      success: true,
      edit: false,
    }
    setTodos(prev => [...prev, newTodo]);
    setName("")
  }

  function showTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id && !todo.success ? { ...todo, success: true, edit: false, name: name  } : todo
      )
    );
    setName("")
  }

  return (
    <div className='flex flex-col items-center h-screen bg-blue-100'>
      <div className='bg-white my-20 w-250 p-5 rounded-xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]' value={name} onChange={(e) => setName(e.target.value)}>
        <div className='flex justify-center mt-5 mb-10'>
          <input id='input' type="text" className='border-1 w-75 mr-5 p-1' placeholder='Input'/>
          <button className='bg-black text-white py-2 px-5 rounded-xl cursor-pointer' onClick={createTodo}>Add</button>
        </div>
        <div className=''>
          {todos.map((todo) => {
            return (
              <div className='flex flex-row justify-evenly items-center mb-5'>
                <div className='flex flex-col items-center'>
                  {todo.edit && <input id='input' value={name} onChange={(e) => setName(e.target.value)} type="text" className='border-1 w-75 mr-5 p-1' placeholder='Input'/>}
                  {!todo.edit && <h1>{todo.name}</h1>}
                  <h1 className={todo.success == true ? "text-green-800" : "text-red-800"}>{todo.success == true ? "DONE" : "Not DONE"}</h1>
                </div>
                <div className=''>
                  <button onClick={() => editTodo(todo, todo.id)} className='bg-black text-white mr-5 py-1 px-3 rounded-lg cursor-pointer'>Edit</button>
                  <button onClick={() => showTodo(todo.id)} className={`${todo.success ? `bg-green-700` : `bg-yellow-400`} text-white mr-5 py-1 px-3 rounded-lg cursor-pointer`}>{todo.success ? "Complete" : "Uncomplete"}</button>
                  <button onClick={() => deleteTodo(todo.id)} className='bg-red-700 text-white mr-5 py-1 px-3 rounded-lg cursor-pointer'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
