import React, { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState(["learn Hooks", "sleep till morning"]);

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, `New Todo ${prevTodos.length + 1}`]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <button onClick={addTodo} className="bg-black px-4 py-2 text-white">
        Add to do
      </button>
    </div>
  );
};

export { ToDoList };
