import React, { useState } from 'react'
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    // https://stackoverflow.com/questions/63543170/how-can-i-pass-my-todo-component-data-into-my-todolist-component-using-react-hoo
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos)
  };

  return (
    <div>
      <h1>Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default TodoList
