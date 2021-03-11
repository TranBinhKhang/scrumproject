import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    changeEmail = event => {
        this.setState({ email: event.target.value })
    }
    changePassword = event => {
        this.setState({ password: event.target.value })
    }
    onSubmit = event => {
        event.preventDefault()

        const registered = {
            email: this.state.email,
            password: this.state.password,
            role: ""
        }

        axios.post('http://localhost:4000/app/login', registered).then(response => {
            console.log(response);
            localStorage.setItem('token', response.data);
            window.location = "/"
        });
        //this.props.history.push('/')

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group" />
                            <input type="password"
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group" />
                            <input type="submit" className="btn btn-danger btn-block" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;