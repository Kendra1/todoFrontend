import React from "react";
import TodoService from "../services/api-services/TodoService";
import TodoItem from "../Todos/TodoItem";

class ListTodos extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    TodoService.getTodos().then(todos => {
      this.setState({ todos });
    });
  }

  gotoNewTodo = () => {
    this.props.history.push("/newTodo");
  };

  renderTodos = () => {
    return this.state.todos.map(todo => (
      <TodoItem todoItem={todo} key={todo.id} />
    ));
  };

  render() {
    return this.state.todos.length ? (
      <div>
        {this.renderTodos()}
        <button onClick={this.gotoNewTodo}>New Todo</button>
      </div>
    ) : (
      <div> You currently don't have any todos. </div>
    );
  }
}

export default ListTodos;
