import React from "react";

const TodoCard = ({ todo, deleteTodo, updateTodo }) => {
  const handleStatusChange = (e) => {
    updateTodo(todo.id, { status: e.target.value });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{todo.taskName}</h5>
        <p className="card-text">{todo.description}</p>
        <select
          className="form-select mb-2"
          value={todo.status}
          onChange={handleStatusChange}
        >
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
        <button
          className="btn btn-warning me-2"
          onClick={() => updateTodo(todo.id, { editing: true })}
        >
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
