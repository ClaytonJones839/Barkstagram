import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'

import { withRouter } from 'react-router-dom';
import NavBar from '../../nav_bar/nav_bar';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.body,
            photo: this.props.photo,
            user_id: this.props.user_id,
            fileFound: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.photoFile) {
            const formData = new FormData();
            formData.append('post[body]', this.state.body);
            formData.append('post[user_id]', this.state.user_id)
            formData.append('post[photo]', this.state.photoFile);
    
        
        this.props.createPost(formData)
            .then( (result) => {
                this.props.history.push(`/posts/${result.post.id}`)
            })
        } else {
            this.setState({fileFound: false})
        }
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        }
    }


    errors() {
        if (!this.state.fileFound) {
            return (
                <li className="no-file">
                    No file uploaded
                </li>
            )
        }
    }

    handleCancel(e) {
        e.preventDefault();
        let path = `/users/${this.props.currentUser.id}`;
        this.props.history.push(path);
    }

    render() {

        let postPreview;

        if (this.state.photoUrl) {
            postPreview = 
                <div className="preview-div">
                    <img 
                        className="post-pic-preview" 
                        src={this.state.photoUrl} 
                    />
                </div>
        } else {
            postPreview = 
                <div className="preview-div">
                    <div className="preview-outline">
                        <i className="fa fa-camera"></i>
                    </div>
                </div>
        }


        return (
            <div>
                <NavBarContainer />
            <div className="post-form-container">
                <ul className="login-errors">
                    {this.errors()}
                </ul>
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <div className="upload-form-div">
                        {postPreview}
                    </div>
                    <div className="post-form-right">
                        <div className="post-right-top">
                            <div className="post-form-author">
                                {this.props.currentUser.username}
                            </div>
                        </div>
                        <div className="post-right-mid">
                            <label 
                                className='upload-photo'     
                                htmlFor="file-selector">
                                <div>
                                    <input 
                                        className="photo-input-field" 
                                        id="file-selector"
                                        type="file" 
                                        onChange={this.handleFile}  
                                    />
                                </div>
                            </label>
                            <label className='upload-body'>
                                <textarea
                                    className="post-form-body"
                                    type="text"
                                    value={this.state.body}
                                    placeholder="Write a caption..."
                                    onChange={this.update('body')}
                                >
                                </textarea>
                            </label>
                        </div>
                        <div className="post-right-bottom">
                            <div className="post-form-buttons">
                                <button
                                    className="post-button-cancel"
                                    onClick={this.handleCancel}>
                                    Cancel
                                </button>                                
                                <input 
                                    className="post-button-upload"
                                    type="submit"
                                    value="Upload Post"
                                />

                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default withRouter(PostForm);