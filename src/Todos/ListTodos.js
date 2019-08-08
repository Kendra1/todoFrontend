import React from "react";
import TodoService from "../services/api-services/TodoService";
import AuthService from "../services/api-services/AuthService";
import TodoItem from "../Todos/TodoItem";

class ListTodos extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.setState(TodoService.getTodos(AuthService.getToken()));
  }

  render() {
    return <div />;
  }
}

export default ListTodos;
