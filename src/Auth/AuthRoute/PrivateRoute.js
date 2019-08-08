import React from "react";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router";
import AuthService from "../../services/api-services/AuthService";

class PrivateRoute extends React.Component {
  render() {
    const isAuthenticated = AuthService.getToken();
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    const Component = this.props.component;

    return <Component {...this.props} />;
  }
}

export default withRouter(PrivateRoute);
