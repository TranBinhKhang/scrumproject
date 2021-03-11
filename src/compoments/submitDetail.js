import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import AddComment from './addComment'
import CommentList from './commentList';
import { PickerOverlay } from 'filestack-react';
import jwtDecode from 'jwt-decode'



class SubmitDetail extends Component {
    state = {
        detail: {},
        imageFiles: [],
        comments: [],
        filestackSelected: false,
        imageMain: '',
        key: 0
    }


    async componentDidMount() {
        const id = this.props.match.params.id;
        const email = this.props.match.params.email;
        const res = await axios.get(`http://localhost:4000/app/getSubmitById/${id}`);
        const detail = {
            email: email,
            title: res.data[0].title,
            description: res.data[0].description,
            isChecked: res.data[0].isChecked,
            docsUrl: res.data[0].docsUrl,
            docsName: res.data[0].docsName,
            submitId: res.data[0]._id
        }
        const comments = res.data[0].comments
        const resImageFiles = res.data[0].imageFiles
        var imageFiles = this.state.imageFiles;
        imageFiles.push(resImageFiles)
        this.setState({ imageFiles: imageFiles[0] })
        this.setState({ detail })
        this.setState({ comments });
        this.setState({ imageMain: this.state.imageFiles[0].base64 })
        //console.log("Detail: ", this.state.imageFiles);
    }

    handleAdd = (content) => {
        //console.log("comment: ", content);
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt).user;
        const comment = {
            content: content,
            date: new Date(Date.now()),
            email: user.email
        }
        const comments = [...this.state.comments, comment]
        this.setState({ comments });
        const update = {
            comments: comments
        }
        axios.patch(`http://localhost:4000/app/updateSubmit/${this.state.detail.submitId}`, update).then(response => console.log(response.data))
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
        //console.log(this.state.filestackSelected)
    }

    render() {
        //console.log("Comments: ", this.state.comments);
        var options;
        return (
            // <div>
            //     <div>
            //         <h1>{this.state.detail.email}'s detail information</h1>
            //         <p>Email : {this.state.detail.email}</p>
            //         <p>Title : {this.state.detail.title}</p>
            //         <p>Description: {this.state.detail.description}</p>
            //         <div style={{ display: 'flex', flexDirection: 'row' }}>
            //             <p style={{ display: 'inline' }}>Download file docs: </p>
            //             <a href={this.state.detail.docsUrl} target="_blank">{this.state.detail.docsName} </a>
            //             <button onClick={this.getUpload.bind(this)}>Upload files docs</button>
            //             {this.state.filestackSelected && (<PickerOverlay
            //                 apikey={'AxjXbdiCNTkuFSyNvFyHKz'}
            //                 onSuccess={(res) => {
            //                     console.log(res);
            //                     const newinfo = res;
            //                     console.log(newinfo)
            //                     this.setState({ docsFile: newinfo });
            //                 }}
            //             />)}
            //         </div>
            //         <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 200 }}>
            //             {this.state.imageFiles.map(item => (
            //                 <img src={item.base64} alt={item.name}></img>
            //             ))}
            //         </div>
            //         <AddComment onAddComment={this.handleAdd} />
            //         <CommentList comments={this.state.comments} />
            //     </div>
            // </div>

            <div style={{}}>
                <h1>{this.state.detail.email}'s detail information</h1>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 400 }}>
                    <div style={{ borderRadius: 10, borderColor: '#d3d3d3', borderStyle: 'solid', borderWidth: '1px', padding: 10, display: 'flex', flexDirection: 'row', height: 400 }}>
                        <div style={{ margin: 5, width: 70, height: '100%' }}>
                            {this.state.imageFiles.map((item, i) => (
                                //console.log("key: ", i, item.name)
                                this.state.key === i ? (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', width: 50, height: 50, margin: 5, borderStyle: 'solid', borderWidth: '1px', borderRadius: 5, borderColor: '#FFD700' }}>
                                        <img onClick={() => { this.setState({ imageMain: item.base64 }); this.setState({ key: i }) }} style={{ maxWidth: '100%', maxHeight: '100%' }} src={item.base64} alt={item.name}></img>
                                    </div>
                                ) : (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', width: 50, height: 50, margin: 5, borderStyle: 'solid', borderWidth: '1px', borderRadius: 5, borderColor: '#d3d3d3' }}>
                                        <img onClick={() => { this.setState({ imageMain: item.base64 }); this.setState({ key: i }) }} style={{ maxWidth: '100%', maxHeight: '100%' }} src={item.base64} alt={item.name}></img>
                                    </div>
                                )
                            ))}
                        </div>
                        <div style={{ backgroundColor: '#EBECF00', height: '100%', width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={this.state.imageMain} alt='' />
                        </div>
                    </div>
                    <div style={{ marginLeft: 20, height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ fontWeight: 'bold', color: 'black', display: 'inline' }}>Email</p>
                            <p style={{ fontWeight: 'bold' }}>: {this.state.detail.email}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ fontWeight: 'bold', color: 'black', display: 'inline' }}>Title</p>
                            <p style={{ fontWeight: 'bold' }}>: {this.state.detail.title}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ fontWeight: 'bold', color: 'black', display: 'inline' }}>Description</p>
                            <p style={{ fontWeight: 'bold' }}>: {this.state.detail.description}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ fontWeight: 'bold', color: 'black', display: 'inline' }}>Download file docs as Zip: </p>
                            <a style={{ color: 'blue' }} href={this.state.detail.docsUrl} target="_blank">{this.state.detail.docsName} </a>
                        </div>
                        <button onClick={this.getUpload.bind(this)}>Edit files docs</button>
                        {this.state.filestackSelected && (<PickerOverlay
                            apikey={'AxjXbdiCNTkuFSyNvFyHKz'}
                            onSuccess={(res) => {
                                console.log(res);
                                const newinfo = res;
                                console.log(newinfo);
                                var detail = this.state.detail;
                                const update = {
                                    docsUrl: 'https://process.filestackapi.com/zip/' + newinfo.filesUploaded[0].handle,
                                    docsName: newinfo.filesUploaded[0].filename
                                }
                                detail.docsName = update.docsName
                                detail.docsUrl = update.docsName
                                this.setState({ detail });
                                axios.patch(`http://localhost:4000/app/updateSubmit/${this.state.detail.submitId}`, update).then(response => console.log(response.data))
                            }}
                        />)}
                    </div>
                </div>

                <AddComment onAddComment={this.handleAdd} />
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}
export default SubmitDetail;
