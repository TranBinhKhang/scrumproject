import React, { Component } from 'react';

class AddComment extends Component {
    state = {
        content: ''
    }

    onChangeContent = event => {
        this.setState({ content: event.target.value })
    }

    onSubmit = event => {
        event.preventDefault();
        const content = this.state.content;
        this.props.onAddComment(content);
        this.setState({ content: '' });
    }

    render() {
        return (
            <div>
                <h3>Add a Comment</h3>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <textarea rows="5"
                            required
                            className="form-control"
                            value={this.state.content}
                            placeholder="Type a comment"
                            onChange={this.onChangeContent}>
                        </textarea>
                    </div>
                    <div className="form-group" align="right">
                        <input type="submit"
                            className="btn btn-dark"
                            value="Post Comment">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddComment
