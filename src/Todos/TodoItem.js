import React from "react";

const TodoItem = ({ todoItem, deleteTodo, editTodo }) => {
  return (
    <div>
      <h3>
        Title: <font color="blue">{todoItem.title}</font>
      </h3>
      <h4>
        Description:
        <font color="blue">
          {!todoItem.description && "No description"}
          {todoItem.description}
        </font>
      </h4>
      <h4>
        Priority: <font color="blue">{todoItem.priority}</font>
      </h4>
      <h4>
        Completed:
        <font color="blue">
          {!todoItem.completed ? "Not completed" : "Completed"}
        </font>
      </h4>
      <button onClick={() => deleteTodo(todoItem.id)}>Delete todo</button>
      <button onClick={() => editTodo(todoItem)}>Edit todo</button>
      <br />
      <br />
    </div>
  );
};

export default TodoItem;
