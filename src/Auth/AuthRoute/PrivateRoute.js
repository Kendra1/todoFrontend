import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import AuthService from '../../services/api-services/AuthService';
import { Redirect } from 'react-router';

class PrivateRoute extends React.Component{

    render() {
        console.log(this.props);
        const { isAuthenticated, ...restProps } = this.props;
        if(isAuthenticated){
            return <Redirect to="/"/>;
            
        }
        const Component = this.props.component;

        return <Component {...this.props}></Component>

    }


}

export default withRouter(PrivateRoute);