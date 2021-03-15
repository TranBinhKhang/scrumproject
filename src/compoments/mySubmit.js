import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'



class MySubmit extends Component {
    state = {
        account: {},
        image: [],
        email: ''
    }

    async componentDidMount() {
        const response = await axios.get(`http://localhost:4000/app/getAccountById/${this.props.id}`);
        console.log(response.data.account[0])
        this.setState({ account: response.data.account[0] })
        for (let i = 0; i < this.state.account.submitId.length; i++) {
            const res = await axios.get(`http://localhost:4000/app/getSubmitById/${this.state.account.submitId[i]}`);
            //console.log("res:", res.data[0]);
            const image = [...this.state.image, res.data[0]]
            this.setState({ image })
        }
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt).user;
        this.setState({ email: user.email });
    }
    render() {
        console.log("State: ", this.state)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th >Full Name</th>
                        <th >Details</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.image.map(item => (
                        <tr key={item._id}>
                            <td>
                                <p>Tite: {item.title}</p>
                                <p>Description: {item.description}</p>
                                <p>Status: {item.isChecked === true ? "Approved" : "Not Approved"}</p>
                                <a href={item.docsUrl} target="_blank">Dowload file docs as Zip</a>
                            </td>
                            <td>
                                <Link to={`/submitlistfaculty/${this.state.email}/${item._id}`} >Detail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default MySubmit;