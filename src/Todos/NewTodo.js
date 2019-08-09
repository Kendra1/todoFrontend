import React from "react";
import TodoService from "../services/api-services/TodoService";

class NewTodo extends React.Component {
  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        ...this.props.location.state,
        editing: true
      });
    }
  }
  state = {
    title: "",
    description: " ",
    priority: "LOW",
    completed: "0",
    err: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    (this.state.editing
      ? TodoService.editTodo(this.state)
      : TodoService.makeTodo(this.state)
    )
      .then(() => {
        this.props.history.push("/todos");
      })
      .catch(() => {
        this.setState({ err: "Invalid input" });
      });
  };

  render() {
    const { err } = this.state;

    return (
      <form>
        Title
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        Description
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br />
        Priority
        <select
          name="priority"
          size="1"
          value={this.state.priority}
          onChange={this.handleChange}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <br />
        Completed
        <select
          name="completed"
          size="1"
          value={this.state.completed}
          onChange={this.handleChange}
        >
          <option value="0">False</option>
          <option value="1">True</option>
        </select>
        <br />
        <input
          type="submit"
          value={this.state.editing ? "Edit" : "Submit"}
          onClick={this.handleSubmit}
        />
        {err && (
          <h1>
            <font color="red">{err}</font>
          </h1>
        )}
      </form>
    );
  }
}

export default NewTodo;
