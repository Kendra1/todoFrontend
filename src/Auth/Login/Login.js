import React from 'react';
import AuthService from '../../services/api-services/AuthService';


class Login extends React.Component{

    state = {'email': '', 'password': ''};

    handleChange = (event) =>{

        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            ...this.state,
            [name]: value
        })
        console.log(this.state);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        AuthService.login(this.state)
        .then(data => {
            this.props.updateToken(data);
        });
    }

    render(){
        console.log(this.props);
        return(

            <form>

                Email<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <br />
                Password<input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                <br />
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>

        )
    }

}
 
export default Login;