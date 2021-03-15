import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

class AdminCheckAccount extends Component {
    state = {
        account: [],
    }

    async componentWillMount() {
        const response = await axios.get('http://localhost:4000/app/getAccountToCheck');
        let data = this.state.account;
        data.push(response.data)
        this.setState({ account: data[0].account });
    }

    handleInput = event => {
        console.log("event call")
        const id = event.target.value;
        axios.patch('http://localhost:4000/app/checked/' + id).then(response => {
            //console.log("Data: ", response.data)
            const account = this.state.account.filter(m => m._id !== response.data._id)
            this.setState({ account })
        });

    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th >Full Name</th>
                        <th >Email</th>
                        <th >User Name</th>
                        <th >Password</th>
                        <th >Get account to online</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.account.map(item => (
                        <tr key={item._id}>
                            <td>{item.fullName}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>
                                <button type="button" className="btn btn-success" value={item._id} onClick={this.handleInput} >Check</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default AdminCheckAccount;