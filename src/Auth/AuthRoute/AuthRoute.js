import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import AuthService from '../../services/api-services/AuthService';
import { Redirect } from 'react-router';

class AuthRoute extends React.Component{


    componentDidMount() {
        const token = AuthService.getToken();
        this.setState({ token });
        console.log("am here?");
        if (!token) {
            console.log("am here");
            return (
                
                <Redirect to="/" />
            )
        }
        this.props.update(token);
    }


    // componentDidUpdate(prevProps, prevState) {
    //     if (!prevProps) {
    //         this.props.history.push('/');

    //     }
    // }
    render() {
        console.log(this.props);
        const { isAuthenticated, ...restProps } = this.props;
        if(isAuthenticated){
            return <Redirect to="/"/>;
            
        }
       return <Redirect to="/login"/>;

    }


}

export default withRouter(AuthRoute);