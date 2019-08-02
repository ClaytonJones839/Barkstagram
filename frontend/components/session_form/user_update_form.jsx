import React from "react";
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

class UserUpdateForm extends React.Component {
    constructor(props) {
        super(props);

        let { currentUser } = this.props;
        this.state = {
            bio: currentUser.bio,
            username: currentUser.username,
            email: currentUser.email,
            photoUrl: currentUser.photoUrl,
            photoFile: null
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.update =  this.update.bind(this)
    }


    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        }
    }


    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('user[id]', this.props.currentUser.id)
        formData.append('user[bio]', this.state.bio);
        formData.append('user[username]', this.state.username);
        // formData.append('user[password]', this.currentUser.password);
        formData.append('user[email]', this.state.email)
        if (this.state.photoFile) {
            formData.append('user[photo]', this.state.photoFile);
        }
        debugger
        this.props.updateUser(formData, this.props.userId )
            .then((result) => {
                this.props.history.push(`/users/${result.user.id}`)
            })
    
    }


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleCancel(e) {
        e.preventDefault();
        let path = `/users/${this.props.currentUser.id}`;
        this.props.history.push(path);
    }


    render() {

        let postPreview = 
            <div className="preview-div">
                <img
                    className="post-pic-preview"
                    src={this.state.photoUrl}
                />
            </div>



        return (
            <div>
                <NavBarContainer />
            <div className="post-form-container">
                <ul className="login-errors">
                    {/* {this.errors()} */}
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
                                Update Profile Picture
                                    <input
                                        className="photo-input-field"
                                        id="file-selector"
                                        type="file"
                                        onChange={this.handleFile}
                                    />
                                </div>
                            </label>
                            <label className='upload-body'>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    // placeholder="Write a caption..."
                                    onChange={this.update('email')}
                                />
                                <input
                                    type="text"
                                    value={this.state.username}
                                    // placeholder="Write a caption..."
                                    onChange={this.update('username')}
                                />
                            </label>
                            <label className='upload-body'>
                                <textarea
                                    type="text"
                                    value={this.state.bio}
                                    // placeholder="Write a caption..."
                                    onChange={this.update('bio')}
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
                                    value="Update Profile"
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

export default withRouter(UserUpdateForm);




