import React from "react";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  withRouter,
  Link,
  Switch
} from "react-router-dom";
=======
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
>>>>>>> df91d624a8dfdc3c4d6866951dd838cdf23ebb4f

import "./App.css";
import Homepage from "./Pages/Homepage";
import Register from "./Auth/Register/Register";
import Login from "./Auth/Login/Login";
import ListTodos from "./Todos/ListTodos";
import AuthRoute from "./Auth/AuthRoute/AuthRoute";
import PrivateRoute from "./Auth/AuthRoute/PrivateRoute";
import AuthService from "./services/api-services/AuthService";
import NewTodo from "./Todos/NewTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  state = {
    token: null
  };

  updateToken = token => {
    this.setState({ token });
  };

  loggingOut = () => {
    AuthService.logout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {!AuthService.getToken() ? (
              <ul>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            ) : (
              <button onClick={this.loggingOut}>Log Out</button>
            )}

            <Switch>
              <PrivateRoute exact path="/newTodo" component={NewTodo} />
              <PrivateRoute exact path="/todos" component={ListTodos} />
              <PrivateRoute exact path="/" component={Homepage} />
              <AuthRoute path="/register" component={Register} />
              <AuthRoute
                path="/login"
                component={Login}
                updateToken={this.updateToken}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
