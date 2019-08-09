import React from "react";
import AuthService from "../../services/api-services/AuthService";

class Login extends React.Component {
  state = { email: "", password: "", err: "" };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    AuthService.login(this.state)
      .then(data => {
        this.props.updateToken(data);
        this.props.history.push("/todos");
      })
      .catch(error => this.setState({ err: "Invalid credentials." }));
  };

  render() {
    const { err } = this.state;
    return (
      <form>
        Email
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        Password
        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
        <h1>
          <font color="red">{err} </font>
        </h1>
      </form>
    );
  }
}

export default Login;
