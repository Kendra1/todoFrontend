import React from "react";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router";

class PrivateRoute extends React.Component {
  render() {
    console.log(this.props);
    const { component: Component, isAuthenticated, ...restProps } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return <Component {...restProps} />;
  }
}

export default withRouter(PrivateRoute);
