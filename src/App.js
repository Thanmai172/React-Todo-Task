import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return filter === "Completed" ? todo.status === "Completed" : todo.status === "Not Completed";
  });

  return (
    <div className="container">
      <h1 className="text-center my-4">My Todo</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
