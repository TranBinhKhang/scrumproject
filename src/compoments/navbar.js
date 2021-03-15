import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Moment from 'react-moment';

function NavBar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Greenwich
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {(props.role === "Admin") && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/AdminCheck">
                                Approving account
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/AccountList">
                                Account List
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/AddminCreateAccount">
                                Create new account
                            </NavLink>
<<<<<<< HEAD
                            < NavLink className="nav-item nav-link"
                                to="/DeadLine" >
                                Manage DeadLine
                            </NavLink>

=======
                            < NavLink className = "nav-item nav-link"
                            to = "/DeadLine" >
                                Manage DeadLine
                            </NavLink>
                            
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                        </React.Fragment>
                    )}
                    {(props.role === "Student") && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/submitForm">
                                Submit news
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/mySubmit">
                                My submit
                            </NavLink>
                            {
                                props.dateStart || props.dateEnd ? (
                                    <NavLink className="nav-item nav-link" to="/mySubmit">
<<<<<<< HEAD

                                        DateLine From: <Moment format="YYYY-MM-DD HH:mm">{props.dateStart}</Moment> To : <Moment format="YYYY-MM-DD HH:mm">{props.dateEnd}</Moment>
                                    </NavLink>
                                ) : null
                            }

=======
                                        
                                    DateLine From: <Moment format="YYYY-MM-DD HH:mm">{props.dateStart}</Moment> To : <Moment format="YYYY-MM-DD HH:mm">{props.dateEnd}</Moment>
                                    </NavLink>
                                ):null
                            }
                           
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                        </React.Fragment>
                    )}
                    {(props.role === "Coordinator") && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/notification">
                                Notification
                            </NavLink>
                        </React.Fragment>
<<<<<<< HEAD
                    )}
=======
                    )}                   
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                    {(props.role === "Marketing Manager") && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/submitlistfaculty">
                                List submit
                            </NavLink>
<<<<<<< HEAD
                            <NavLink className="nav-item nav-link" to="/reportChart">
                                Chart
                            </NavLink>
                        </React.Fragment>
                    )}
=======
                        </React.Fragment>
                    )}                  
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                    {(props.role === "Guest") && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/submitlistfaculty">
                                List submit
                            </NavLink>
                        </React.Fragment>
<<<<<<< HEAD
                    )}
=======
					)}
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                    {!props.email && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/login">
                                Login
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/signup">
                                Sign up
                            </NavLink>
                        </React.Fragment>
                    )
                    }
                    {props.email && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/profit">
                                {props.email}
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/logout">
                                Log out
                            </NavLink>
                        </React.Fragment>
                    )
                    }
                </div>
            </div>
        </nav >
    );
}

export default NavBar;