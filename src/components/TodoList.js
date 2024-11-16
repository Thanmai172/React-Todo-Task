import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, deleteTodo, updateTodo, setFilter }) => {
  return (
    <div>
      <div className="mb-4">
        <label>Status Filter:</label>
        <select
          className="form-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
