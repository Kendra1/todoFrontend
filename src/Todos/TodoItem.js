import React from "react";

const TodoItem = ({ todoItem }) => {
  return (
    <div>
      <h3>{todoItem.title}</h3>
      <h3>{todoItem.description}</h3>
      <h3>{todoItem.priority}</h3>
      <h3>{todoItem.completed}</h3>
    </div>
  );
};

export default TodoItem;
