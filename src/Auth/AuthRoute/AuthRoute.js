import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router";

class AuthRoute extends React.Component {
  render() {
    const { component: Component, isAuthenticated, ...restProps } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return <Component {...restProps} />;
  }
}

export default withRouter(AuthRoute);
