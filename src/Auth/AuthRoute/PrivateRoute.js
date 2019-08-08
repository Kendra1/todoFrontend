import React from "react";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router";
import AuthService from "../../services/api-services/AuthService";

class PrivateRoute extends React.Component {
  render() {
    const isAuthenticated = AuthService.getToken();
    const { component: Component, ...restProps } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <Component {...restProps} />;
  }
}

export default withRouter(PrivateRoute);
