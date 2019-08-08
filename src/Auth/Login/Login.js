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
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    AuthService.login(this.state)
      .then(data => {
        this.props.updateToken(data);
        this.props.history.push("/");
      })
      .catch(error => this.setState({ err: error }));
  };

  render() {
    console.log(this.props);
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
        {err && <h1> {err.toString()} </h1>}
      </form>
    );
  }
}

export default Login;
