import React from "react";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router";
import AuthService from "../../services/api-services/AuthService";

class AuthRoute extends React.Component {
  render() {
    const isAuthenticated = AuthService.getToken();
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    const Component = this.props.component;

    return <Component {...this.props} />;
  }
}

export default withRouter(AuthRoute);
