import React from "react";

const TodoItem = props => {
  return (
    <div>
      <h3>props.todo.title</h3>
      <h3>props.todo.description</h3>
      <h3>props.todo.priority</h3>
      <h3>props.todo.completed</h3>
    </div>
  );
};

export default TodoItem;
