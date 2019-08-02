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
        // debugger
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
            <div className="preview-div update-preview">
                <div className="update-left-top">
                    Profile Picture
                </div>
                <div className="profile-pic-main">
                    <img
                        className="post-pic-preview"
                        src={this.state.photoUrl}
                    />
                </div>
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
                    <div className="update-form-right">
                        <div className="update-right-top">
                            <div>
                                {this.props.currentUser.username}
                            </div>
                        </div>
                        <div className="update-right-mid">
                            <div className="update-profile-pic">
                            <label
                                className='upload-photo'
                                htmlFor="file-selector">
                                <div className="update-profile-text">
                                    Update Profile Picture:
                                </div>
                                    <input
                                        className="photo-input-field int"
                                        id="file-selector"
                                        type="file"
                                        onChange={this.handleFile}
                                    />
                            </label>
                            </div>
                            <label className='update-email'>
                                <div className="update-profile-text">
                                    Update Email:
                                </div>
                                <input
                                    type="text"
                                    className="update-text-input int"
                                    // value={this.state.email}
                                    placeholder={this.state.email}
                                    onChange={this.update('email')}
                                />
                                </label>
                                <label className="update-username">
                                <div className="update-profile-text">
                                        Update Username:
                                </div>
                                <input
                                    type="text"
                                    className="update-text-input int"
                                    placeholder={this.state.username}
                                    // placeholder="Write a caption..."
                                    onChange={this.update('username')}
                                />
                            </label>
                            <label className='update-bio'>
                                <div className="update-profile-text">
                                    Update Bio:
                                </div>
                                <textarea
                                    type="text"
                                    className="update-bio-text int"
                                    // value={this.state.bio}
                                    placeholder={this.state.bio}
                                    onChange={this.update('bio')}
                                >
                                </textarea>
                            </label>
                        </div>
                        <div className="update-right-bottom">
                            <div className="post-form-buttons">
                                <button
                                    className="post-button-cancel update-cancel"
                                    onClick={this.handleCancel}>
                                    Cancel
                                </button>
                                <input
                                    className="post-button-upload update-submit"
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




