import React from "react";
import TodoService from "../services/api-services/TodoService";
import TodoItem from "../Todos/TodoItem";

class ListTodos extends React.Component {
  state = {
    todos: []
  };

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  componentDidMount() {
    TodoService.getTodos().then(todos => {
      console.log(todos);
      this.setState({ todos });
    });
  }

  routeChange = () => {
    this.props.history.push("/newTodo");
  };

  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <TodoItem todoItem={todo} key={todo.id} />
        ))}
        <button onClick={this.routeChange}>New Todo</button>
      </div>
    );
  }
}

export default ListTodos;
