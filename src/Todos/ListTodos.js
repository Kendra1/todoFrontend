import React from "react";
import TodoService from "../services/api-services/TodoService";
import AuthService from "../services/api-services/AuthService";
import TodoItem from "../Todos/TodoItem";

class ListTodos extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    TodoService.getTodos().then(todos => {
      this.setState({ todos: [...this.state.todos, ...todos] });
      // const { todos } = this.state;
    });
    // console.log(response);
    // console.log(todos);
  }

  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <TodoItem todoItem={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}

export default ListTodos;
