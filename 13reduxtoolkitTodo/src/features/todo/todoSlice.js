import {createSlice ,nanoid} from '@reduxjs/toolkit';


const initialState={
    todos:[{id:1,text:"Hello world"}]
}

// function sayHello(){
//     console.log("Hello world");
// }


export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        // using function 
        // addTodo:sayHello,

 // other method with same other method
 addTodo:(state,action)=>{
   const todo={
        // id:Date.now() ,
        id:nanoid(),
        text :action.payload
    }
    state.todos.push(todo)
 },
    removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=> todo.id!==action.payload)
    },

    }
})


export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer