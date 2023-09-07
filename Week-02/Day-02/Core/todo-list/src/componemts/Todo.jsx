import React from 'react'

const Todo = ({todoList,deleteTodo, setTodoList}) => {
  return (
    <div>
        {todoList.map((todo, idx)=> <div key={idx}>
            <h3>                  
                <span style={todo.isCompleted? {textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.content}</span> 
                <input type="checkbox" id={idx} checked={todo.isCompleted} onChange={(e)=>{const updatedList = [...todoList]
                  updatedList[idx].isCompleted =! updatedList[idx].isCompleted
                  setTodoList(updatedList)}}/>
                <button style={{backgroundColor:"gray", color:"white"}}
                onClick={()=>deleteTodo(idx)}>Delete</button>
            </h3>    
        </div> )}
    </div>
  )
}

export default Todo