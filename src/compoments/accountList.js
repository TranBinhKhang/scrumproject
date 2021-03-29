import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


class AccountList extends Component {
    state = {
        account: [],
    }

    async componentWillMount() {
        const response = await axios.get('http://localhost:4000/app/getAccountChecked');
        let data = this.state.account;
        data.push(response.data)
        this.setState({ account: data[0].account });
    }

    handleDelete = event => {
        console.log("event call", event.target.value);
        const id = event.target.value;
        axios.delete(`http://localhost:4000/app/deleteAccount/${id}`).then(response => {
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
                        <th >Role</th>
                        <th >Faculty</th>
                        <th >Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.account.map(item => (
                        <tr key={item._id}>
                            <td>
                                <Link to={"/AccountList/" + item._id}>{item.fullName}</Link>
                            </td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{item.faculty}</td>
                            <td>
                                <button type="button" className="btn btn-danger" value={item._id} onClick={this.handleDelete} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default AccountList;