import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { validateSignup } from "./../validationErr/validateSignup"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: '',
            faculty: 'It',
            errors: {}
        }
    }

    changeFullName = event => {
        this.setState({ fullName: event.target.value })
    }
    changeEmail = event => {
        this.setState({ email: event.target.value })
    }
    changeUsername = event => {
        this.setState({ username: event.target.value })
    }
    changePassword = event => {
        this.setState({ password: event.target.value })
    }
    facultyChange = event => {
        this.setState({ faculty: event.target.value })
    }
    clearState = () => {
        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: '',
            faculty: 'It'
        })
    }
    validate = (fullName, username, email, password ) => {
        const errors = validateSignup(fullName, username, email, password );
        this.setState({ errors: errors });
        return Object.values(errors).every((err) => err === "");
    };
    onSubmit = event => {
        event.preventDefault();
        const { fullName, username, email, password } = this.state;
        if (this.validate(fullName, username, email, password )) {
            const registered = {
                fullName: this.state.fullName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                faculty: this.state.faculty
            }
            console.log(registered)
            axios.post('http://localhost:4000/app/signup', registered).then(response => console.log(response.data)).
            then(res => {
            alert('Please wait for the confirmation of the account from Admin!')
            this.clearState()
        } )
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                                placeholder='Full Name'
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className="form-control form-group" />
                            {this.state.errors.fullName && (
                                <div className="text-danger">{this.state.errors.fullName}</div>
                            )}

                            <input type="text"
                                placeholder=' UserName'
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className="form-control form-group" />
                            {this.state.errors.username && (
                                <div className="text-danger">{this.state.errors.username}</div>
                            )}

                            <input type="text"
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group" />
                            {this.state.errors.email && (
                                <div className="text-danger">{this.state.errors.email}</div>
                            )}
                            <input type="password"
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group" />
                            {this.state.errors.password && (
                                <div className="text-danger">{this.state.errors.password}</div>
                                )}
                            <select className="form-select form-select-lg mb-3" aria-label="Default select example" onChange={this.facultyChange}>
                                <option selected>Select Faculty</option>
                                <option value="It">It</option>
                                <option value="Maketing">Maketing</option>
                                <option value="Graphic design">Graphic design</option>
                            </select>
                            <input type="submit" className="btn btn-danger btn-block" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;