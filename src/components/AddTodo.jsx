import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
//import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/todo/todoSlice';
function AddTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("here");
        setInput('')
        dispatch(addTodo(input));
        
    }

  return (
    <form  onSubmit={handleSubmit}className='s space-x-3 mt-12' >
        <input
        required
        type='text' 
        placeholder='todo'
        value={input}
        onChange={(e)=>setInput(e.target.value)}

        className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
        </input>
        <button 
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Add Todo
        </button>
    </form>
  )
}

export default AddTodo
