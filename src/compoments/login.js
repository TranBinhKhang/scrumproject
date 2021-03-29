import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import imgLogo from '../images/logo.png'
import {setErrors} from "../validationErr/setErrors"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors:{}
        }
    }

    changeEmail = event => {
        this.setState({ email: event.target.value })
    }
    changePassword = event => {
        this.setState({ password: event.target.value })
    }
    validate=(email, password)=>{
        const errors = setErrors(email, password);
        this.setState({errors : errors});
        return Object.values(errors).every((err)=> err ==="");
    };
    onSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        if(this.validate(email, password)){
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
        }
        //this.props.history.push('/')

    }

    render() {
        return (
            // <div>
            //     <div style={{ width: '100%', height: "100%", backgroundImage: `url("https://login.gre.ac.uk/adfs/portal/illustration/illustration.jpg?id=E59222772F7DA10A27598E8B24D23319BF6C4E5B715402648EA5FFA75EE1C337")` }} className="container">
            //         <div className="form-div">
            //             <form onSubmit={this.onSubmit}>
            //                 <input type="text"
            //                     placeholder='E-mail'
            //                     onChange={this.changeEmail}
            //                     value={this.state.email}
            //                     className="form-control form-group" />
            //                 <input type="password"
            //                     placeholder='Password'
            //                     onChange={this.changePassword}
            //                     value={this.state.password}
            //                     className="form-control form-group" />
            //                 <input type="submit" className="btn btn-danger btn-block" value='Submit' />
            //             </form>
            //         </div>
            //     </div>
            // </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, width: '100%', height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url("https://login.gre.ac.uk/adfs/portal/illustration/illustration.jpg?id=E59222772F7DA10A27598E8B24D23319BF6C4E5B715402648EA5FFA75EE1C337")` }}>
                <div style={{ padding: 20, width: '50%', height: 400, backgroundColor: '#fff' }}>
                    <img src={imgLogo} style={{ marginBottom: 10 }} />
                    <h2 style={{ color: '333333', fontWeight: 'bold', margin: 20 }}>Sign In</h2>
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input
                                style={{ borderColor: `rbg(0, 0, 0, 0.6)`, borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomStyle: 'solid', borderBottomWidth: 1, cursor: 'auto', padding: 5 }}
                                type="text"
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group" />
                                {this.state.errors.email && (
                                    <div className="text-danger">{this.state.errors.email}</div>
                                )}
                            <input type="password"
                                style={{ borderColor: `rbg(0, 0, 0, 0.6)`, borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomStyle: 'solid', borderBottomWidth: 1, cursor: 'auto', padding: 5 }}
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group" />
                                {this.state.errors.password && (
                                    <div className="text-danger">{this.state.errors.password}</div>
                                )}
                            <div style={{ width: '100%', padding: 5, textAlign: 'right' }}>
                                <input style={{ backgroundColor: '#0066CC', width: 100 }} type="submit" className="btn btn-danger btn-block" value='Sign In' />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Login;