import React, { Component } from 'react';
import ImageListInput from './imageListInput';
import axios from 'axios';
import { PickerOverlay } from 'filestack-react';
import {valiSubmitform} from "./../validationErr/valiSubmitform";


class SubmitForm extends Component {
    state = {
        title: "",
        description: "",
        files: [],
        agree: false,
        filestackSelected: false,
        showDownloadLink: false,
        docsFile: [],
        errors:{}
    }

    handleAdd = uri => {
        console.log("uri: ", uri)
        const files = [...this.state.files, uri]
        console.log("new file: ", files)
        this.setState({ files })
        console.log("new state: ", this.state.files)
    }

    changeTitle = event => {
        this.setState({ title: event.target.value })
    }
    changeDescription = event => {
        this.setState({ description: event.target.value })
    }
    checkboxHandler = () => {
        this.setState({ agree: !this.state.agree })
    }
    clearState = () => {
        this.setState({
            title: "",
            description: "",
            files: [],
            agree: false,
            filestackSelected: false,
            showDownloadLink: false,
            docsFile: [],
        })
    }
    validate=(title, description)=>{
        const errors = valiSubmitform(title, description);
        this.setState({errors : errors});
        return Object.values(errors).every((err)=> err ==="");
    };
    onSubmit = event => {
        const { dateStart, dateEnd } = this.props;
        if (!dateStart || !dateEnd) {
            alert('You cannot submit because the submission deadline has expired!');
            return;
        }
        event.preventDefault();
        const {title, description} = this.state;
        if(this.validate(title, description)){
            const submit = {
                title: this.state.title,
                description: this.state.description,
                imageFiles: this.state.files,
                email: this.props.email,
                docsName: this.state.docsFile.filesUploaded[0].filename,
                docsUrl: 'https://process.filestackapi.com/zip/' + this.state.docsFile.filesUploaded[0].handle
            }
    
            axios.post('http://localhost:4000/app/submit', submit).then(response => console.log(response.data)).
            then(res => {
            alert('Submit Successfully !')
            this.clearState()
        } )
        }
    }
    async getUpload(event) {
        event.preventDefault()
        if (!this.state.filestackSelected) this.setState({ filestackSelected: true });
        if (this.state.filestackSelected) {
            this.setState({ filestackSelected: false });
            setTimeout(() => {
                this.setState({ filestackSelected: true })
            }, 10);;
        }
        console.log(this.state.filestackSelected)
    }

    render() {
        console.log("doc files: ", this.state.docsFile)
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.filestackSelected && (<PickerOverlay
                    apikey={'AxjXbdiCNTkuFSyNvFyHKz'}
                    onSuccess={(res) => {
                        console.log(res);
                        const newinfo = res;
                        console.log(newinfo)
                        this.setState({ docsFile: newinfo });
                    }}
                />)}
                <input type="text"
                    placeholder='Title'
                    onChange={this.changeTitle}
                    value={this.state.title}
                    className="form-control form-group" />
                    {this.state.errors.title && (
                    <div className="text-danger">{this.state.errors.title}</div>
                    )}
                <input type="text"
                    placeholder='Description'
                    onChange={this.changeDescription}
                    value={this.state.description}
                    className="form-control form-group" />
                    {this.state.errors.description && (
                    <div className="text-danger">{this.state.errors.description}</div>
                    )}
                <button onClick={this.getUpload.bind(this)}>Upload files docs</button>
                <p>upload images</p>
                <ImageListInput
                    files={this.state.files}
                    onAddImage={uri => this.handleAdd(uri)}
                />
                <div>
                    <input type="checkbox" id="agree" onChange={this.checkboxHandler} />
                    <label>  I agree to <b>terms and conditions</b></label>
                </div>
                <input disabled={!this.state.agree} type="submit" className="btn btn-danger btn-block" value='Submit' />
            </form>
        );
    }
}

export default SubmitForm;