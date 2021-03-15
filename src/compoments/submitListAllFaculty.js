import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';



class submitListFGues extends Component {
    state = {
        submit: [],
    }
    async componentDidMount() {

        const response = await axios.get(`http://localhost:4000/app/getAccountChecked`);
        const account = response.data.account.filter(function (user) {
            return user.role === "Student"
        })
        account.forEach(user => {
            const email = user.email;
            const submitId = user.submitId;
            submitId.forEach(async id => {
                const res = await axios.get(`http://localhost:4000/app/getSubmitById/${id}`);
                if(res.data[0].isChecked ){
                    const submitDetail = {
                        email: email,
                        title: res.data[0].title,
                        description: res.data[0].description,
                        imageFiles: res.data[0].imageFiles,
                        isChecked: res.data[0].isChecked,
                        docsUrl: res.data[0].docsUrl,
                        docsName: res.data[0].docsName,
                        submitId: res.data[0]._id
                    }
                    var submit = this.state.submit;
                    submit.push(submitDetail)
                    this.setState({ submit })
                }
                })
        })
    }

    render() {
        console.log("State submit", this.state.submit);
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th >Submit information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.submit.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <p>Email: {item.email}</p>
                                    <p>Tite: {item.title}</p>
                                    <p>Description: {item.description}</p>
                                    <a href={item.docsUrl} target="_blank">Dowload file docs as Zip</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default submitListFGues;