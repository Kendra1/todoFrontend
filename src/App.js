import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import './App.css';
import Homepage from './Pages/Homepage';
import Register from './Auth/Register/Register';
import Login from './Auth/Login/Login';
import AuthRoute from './Auth/AuthRoute/AuthRoute';


class App extends React.Component {
  state = {
    token: null
  }

  componentDidMount() {
      
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.history.location)
    if (prevProps.history.location !== this.props.history.location) {

    }
  }

  updateToken = (token) => {
    this.setState({ token });
  }

  renderComponent = (routerProps) => {
    return <Login {...routerProps} updateToken={this.updateToken} />
  }
  
  render() {
    const { token } = this.state;
    
    // if(token){
    //   return(
    //     <div className="App">
    //       <Router>
    //         <div>
    //           <ul>
    //             <li>
    //               <Link to="/">Homepage</Link>
    //             </li>
    //           </ul>
    //           <Route exact path="/" component={Homepage} />
    //           <Redirect to="/" />
    //         </div>
    //       </Router>
    //     </div>
    //   )
    // }
    return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={Register} />
          <AuthRoute isAuthenticated = {this.state.token} update = {this.updateToken} path="/login" render={this.renderComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
}

export default App;
