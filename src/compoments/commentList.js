import React, { Component } from 'react';
import moment from 'moment';

class CommentList extends Component {
    state = {

    }
    render() {
        return (
            <div>
                {this.props.comments.map(item => (
                    <div className="card">
                        <div className="row">
                            <div className="col-md-10 px-3">
                                <div className="card-block px-3">
                                    <h5 className="card-title text-dark" style={{ marginTop: '10px', 'fontWeight': 'bolder' }}>{item.email}</h5>
                                    <p className="card-text" style={{ fontSize: '16px' }}>{item.content}</p>
                                    <p className="text-muted" style={{ fontSize: '13px' }}>{moment(Date.parse(item.date)).fromNow()}</p>
                                </div>
                            </div>
                            <div className="col-md-2 px-3">
                                <div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentList;