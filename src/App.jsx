import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
function App() {


  return (
    <>
      <div>
        <h1>TODO</h1>
        <AddTodo/>
       <TodoItem/>
        </div>
    </>
  )
}

export default App
