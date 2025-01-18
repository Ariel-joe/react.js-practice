import React, { useState } from 'react'

const ToDo = () => {

    const [todos, setTodos] = useState(["learn Hooks", "sleep till morning"])

    const addTodo = () => {
        setTodo((prevTodos) => ([...prevTodos, `New Todo ${prevTodos.length + 1}`]))
    }
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
                {todos.map((todo, index) => {
                    <li key={index}>{todo}</li>
                })}
        </ul>
      
    </div>
  )
}

export {ToDo}
