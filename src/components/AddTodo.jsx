import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
//import {useDispatch} from 'react-redux'
import { addTodo, setActive,setDeactive, updateTodo } from '../Features/todo/todoSlice';
function AddTodo() {
    const dispatch = useDispatch()
    
    var isActives=useSelector(state=>state.isActive)
    const updatedTexts=useSelector(state=>state.updatedText)
    const userIds=useSelector(state=>state.userId)
    
    const [input, setInput] = useState("")
  console.log(updatedTexts);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("here");
        if(isActives!==true)
        dispatch(addTodo(input));
      else dispatch(updateTodo({id:userIds,text:input}))
        setInput('')
       // dispatch(setActive())
        
    }
    useEffect(() => {
      setInput(updatedTexts);
    }, [userIds])
    
    console.log(isActives)
    var flag=true;

    
   /*  if(isActive){
      setInput(updatedText);
      isActive=false;
      dispatch(setDeactive())
    } */

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
        className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg${isActives && ' bg-green-400 hover:bg-green-600'}`}>
          {isActives?<>Update Todo</> : <>Add Todo</>}
        </button>
    </form>
  )
}

export default AddTodo
