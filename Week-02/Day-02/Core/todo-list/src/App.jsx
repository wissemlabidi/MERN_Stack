import { useState } from 'react'
import './App.css'
import Todo from './componemts/Todo'
import Form from './componemts/Form'

function App() {
  const [todoList, setTodoList] = useState([
    {content:"Get the Python Belt" ,isCompleted:true},
    {content:"Get the MERN Belt" ,isCompleted:false},
    {content:"Get the .NET Belt" ,isCompleted:false},
  ])
  const deleteTodo = (id)=>{
    const filteredTodoList = todoList.filter((todo,idx)=>idx != id)
    setTodoList(filteredTodoList)
  }
  return (
    <>
      <h1>To Do List</h1>
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <Todo todoList={todoList} deleteTodo={deleteTodo} setTodoList={setTodoList}/>
    </>
  )
}

export default App
