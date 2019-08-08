import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import './App.css';
import Homepage from './Pages/Homepage';
import Register from './Auth/Register/Register';
import Login from './Auth/Login/Login';
import AuthRoute from './Auth/AuthRoute/AuthRoute';
import PrivateRoute from './Auth/AuthRoute/PrivateRoute';
import AuthService from './services/api-services/AuthService';


class App extends React.Component {
  state = {
    token: null
  }

  updateToken = (token) => {
    this.setState({ token });
  }

  getToken = () => {
    return AuthService.getToken();
  }

  renderComponent = (routerProps) => {
    return <Login {...routerProps} updateToken={this.updateToken} />
  }
  
  render() {
    ;
    return (
    <div className="App">
      <Router>
        <div>
          
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute isAuthenticated = {this.getToken()} path="/register" component={Register} />
          <AuthRoute isAuthenticated ={this.getToken()} path="/login" component={Login} updateToken={this.updateToken}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
}

export default App;
