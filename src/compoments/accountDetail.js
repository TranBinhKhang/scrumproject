import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

class AccountDetail extends Component {
    constructor() {
        super();
        this.state = {
            account: {}
        }
    }

    async componentWillMount() {
        const id = this.props.match.params.id
        const response = await axios.get(`http://localhost:4000/app/getAccountById/${id}`);
        console.log(response.data.account[0])
        this.setState({ account: response.data.account[0] })
        console.log("State: ", this.state)
        // data.push(response.data)
        // this.setState({ account: data[0].account });
    }

    changeFullName = event => {
        const account = {
            fullName: event.target.value,
            email: this.state.account.email,
            username: this.state.account.username,
            password: this.state.account.password,
            faculty: this.state.account.faculty,
            role: this.state.account.role
        }
        this.setState({ account })
    }
    changeEmail = event => {
        const account = {
            fullName: this.state.fullName,
            email: event.target.value,
            username: this.state.account.username,
            password: this.state.account.password,
            faculty: this.state.account.faculty,
            role: this.state.account.role
        }
        this.setState({ account })
    }
    changeUsername = event => {
        const account = {
            fullName: this.state.account.fullName,
            email: this.state.account.email,
            username: event.target.value,
            password: this.state.account.password,
            faculty: this.state.account.faculty,
            role: this.state.account.role
        }
        this.setState({ account })
    }
    changePassword = event => {
        const account = {
            fullName: this.state.account.fullName,
            email: this.state.account.email,
            username: this.state.account.username,
            password: event.target.value,
            faculty: this.state.account.faculty,
            role: this.state.account.role
        }
        this.setState({ account })
    }
    facultyChange = event => {
        const account = {
            fullName: this.state.account.fullName,
            email: this.state.account.email,
            username: this.state.account.username,
            password: this.state.account.password,
            faculty: event.target.value,
            role: this.state.account.role
        }
        this.setState({ account })
    }
    roleChange = event => {
        const account = {
            fullName: this.state.account.fullName,
            email: this.state.account.email,
            username: this.state.account.username,
            password: this.state.account.password,
            faculty: this.state.account.faculty,
            role: event.target.value
        }
        this.setState({ account })
    }

    onSubmit = event => {
        event.preventDefault()
        console.log("State Check:", this.state)
        const update = {
            fullName: this.state.account.fullName,
            username: this.state.account.username,
            email: this.state.account.email,
            password: this.state.account.password,
            faculty: this.state.account.faculty,
            role: this.state.account.role,
        }
        const id = this.props.match.params.id
        axios.patch(`http://localhost:4000/app/updateAccount/${id}`, update).then(response => console.log(response.data))
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                                placeholder='Full Name'
                                value={this.state.account.fullName}
                                onChange={this.changeFullName}
                                className="form-control form-group" />

                            <input type="text"
                                placeholder=' UserName'
                                onChange={this.changeUsername}
                                value={this.state.account.username}
                                className="form-control form-group" />

                            <input type="text"
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.account.email}
                                className="form-control form-group" />
                            <input type="text"
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.account.password}
                                className="form-control form-group" />
                            <select className="form-select form-select-lg mb-3" defaultValue={this.state.account.faculty} aria-label="Default select example" onChange={this.facultyChange}>
                                <option selected>Select Faculty</option>
                                <option value="It">It</option>
                                <option value="Maketing">Maketing</option>
                                <option value="Graphic design">Graphic design</option>
                            </select>
                            <select className="form-select form-select-lg mb-3" aria-label="Default select example" onChange={this.roleChange}>
                                <option selected>Select Role</option>
                                <option value="Student">Student</option>
                                <option value="Marketing Manager">Marketing Manager</option>
                                <option value="Faculty’s Marketing Coordinator">Faculty’s Marketing Coordinator</option>
                                <option value="Guest">Guest</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <input type="submit" className="btn btn-danger btn-block" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountDetail;