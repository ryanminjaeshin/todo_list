import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    // https://stackoverflow.com/questions/63543170/how-can-i-pass-my-todo-component-data-into-my-todolist-component-using-react-hoo
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    };
    const newTodos = [todo, ...todos];
    setTodos(newTodos)
  };

  const updateTodo = (todoId, newValue) => {
    // https://stackoverflow.com/questions/63543170/how-can-i-pass-my-todo-component-data-into-my-todolist-component-using-react-hoo
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    };
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        // toggling true/false
        todo.isComplete = !todo.isComplete
      };
      return todo
    });
    setTodos(updatedTodos)
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList
