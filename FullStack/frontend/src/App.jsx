import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-blue-100'>
      <div className='bg-white'>
        <div className=''>
          <input type="text" className='border-1 mr-5'/>
          <button>Add</button>
        </div>
        <div className=''>
          <ul>
            <li>Test</li>
            <li>OOO</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
