import React from "react";
import AuthService from "../../services/api-services/AuthService";

class Register extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    company: "",
    err: ""
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    AuthService.register(this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        if (error.response.data.email) {
          this.setState({ err: "Email is already taken or invalid" });
        } else {
          this.setState({ err: "Invalid input" });
        }
      });
  };

  render() {
    const { err } = this.state;

    return (
      <form>
        First name
        <input
          type="text"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handleChange}
        />
        <br />
        Last name
        <input
          type="text"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handleChange}
        />
        <br />
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
        Confirm password
        <input
          type="text"
          name="password_confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleChange}
        />
        <br />
        Company
        <input
          type="text"
          name="company"
          value={this.state.company}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
        {err && <h1> {err.toString()} </h1>}
      </form>
    );
  }
}

export default Register;
