//import {createSlice} from '@reduxjs/toolkit'
import {createSlice, nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:[{
        id:1,
        text:"Sree"
    }]
    ,
    isActive:false,
    userId:null,
    updatedText:""
   // isEditable
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo:(state,action)=>{
           state.todos= state.todos.map((todo)=>(todo.id===action.payload.id?{...todo,text:action.payload.text}:todo))
            state.isActive=false
            state.userId=null
            state.updatedText=""
        },
        setActive:(state,action)=>{
            state.isActive=true,
            state.userId=action.payload.id
            state.updatedText=action.payload.text
        },
       
    }
})

export const {addTodo, removeTodo,updateTodo,setActive,setDeactive} = todoSlice.actions

export default todoSlice.reducer 