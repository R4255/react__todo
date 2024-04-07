import "./styles.css"
import { useState } from "react"
export default function App(){
  const[newItem,setNewItem]=useState("")//setnewitem is the function, that helps to change the newItem
  const[todos,setTodos]=useState([])
  function handleSubmit(e){
    e.preventDefault()//prevents from refreshing here
    setTodos(currentTodos=>{
      return [
        ...currentTodos,
        {id:crypto.randomUUID(),title:newItem,completed:false},
      ]
    })
    setNewItem("")
  }
  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){//todo.completed=completed wont work because it is immutable
          return {...todo,completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)//if it is not equal to the id , then keep that
    })
  }
  return (

  <>
    <form onSubmit={handleSubmit}className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem}
        onChange={e=>setNewItem(e.target.value)}//onchange is the event listener here
        type="text" id="item"/>
      </div>
      <button className="btn">Add</button>
    </form>
    <h  className="header">Todo List</h>
    <ul className="list">
      {todos.length===0 && "No Todos"} 
      {todos.map(todo=>{//the above line is basically short circuiting
        return (<l1 key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed}
          onChange={e=>toggleTodo(todo.id,e.target.checked)}
          
          >
          </input>
          {todo.title}
        </label>
        <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
      </l1>
      //onClick is a listener
        )  
    })}
    </ul>
  </>
)
}