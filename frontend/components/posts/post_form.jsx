import React from 'react';

import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.body,
            photo: this.props.photo,
            user_id: this.props.user_id
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.append('post[user_id]', this.state.user_id)
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        
        this.props.createPost(formData)
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        }
    }


    errors() {
        if (this.props.errors) {
            return (
                this.props.errors.map(error => {
                    return (<li className="error" key={error}>{error}</li>);
                })
            );
        }
    }

    render() {

        let postPreview;
        if (this.state.imageUrl) {
            postPreview = <img className="post-pic-preview" src={this.state.imageUrl} />
        }


        return (
            <div className="post-detail">
                <ul className="login-errors">
                    {this.errors()}
                </ul>
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <div className="upload-form-div">
                        <label className='upload-post-button'>
                            <input 
                                className="photo-input-field" 
                                type="file" 
                                onChange={this.handleFile}  />
                        </label>
                    </div>
                    {postPreview}
                    <label className='upload-body'>
                    <textarea
                        type="text"
                        value={this.state.body}
                        placeholder="Write a caption..."
                        onChange={this.update('body')}
                    >
                    </textarea>
                    </label>
                    <input 
                        className="upload-post-submit"
                        type="submit"
                        value="Upload Post"
                    />
                </form>
            </div>
        );
    }
}

export default withRouter(PostForm);