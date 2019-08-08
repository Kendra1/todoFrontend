import React from "react";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router";
import AuthService from "../../services/api-services/AuthService";

class AuthRoute extends React.Component {
  render() {
    const isAuthenticated = AuthService.getToken();
    const { component: Component, ...restProps } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return <Component {...restProps} />;
  }
}

export default withRouter(AuthRoute);
