import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostFormContainer from '../posts/post_form_container'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
            this.userPosts = this.props.userPosts;
            this.currentUser = this.props.currentUser;
            this.logout = this.props.logout
            this.handleNewPostForm = this.handleNewPostForm.bind(this)
            // this.userPage = null;
            
            // if (this.props.allUsers[this.props.match.params.userId]) {
            //     this.userPage = this.props.allUsers[this.props.match.params.userId]
            // }
    }

    componentDidMount() {
        // const id = this.props.match.params.userId;
        // this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUser(this.currentUser.id);
        this.props.fetchPosts();
    }


    handleNewPostForm(e) {
        e.preventDefault();
        let path = `/new-post`;
        this.props.history.push(path);
    }

    render() {
        let userPhotos = this.props.userPosts.map(post => {
            return(
                <li key={post.id}>
                    <img 
                        className="user-page-photos"
                        src={post.photoUrl} 
                    />
                </li>
            )
        })
        return (
            <div className="profile-container">
                <div className="profile-top">
                    <h1>{this.currentUser.username}</h1>
                        <div className="profile-top-buttons">
                            <button className="profile-button" onClick={this.logout}>Log Out</button>
                            <button className="profile-button" onClick={this.handleNewPostForm}>Add Photo</button>
                        </div>
                </div>
                    <div className="profile-photo-index-container">
                        <ul className="profile-photo-index">
                            {userPhotos}
                        </ul>
                    </div>
            </div>
        );
    }
}

export default UserShow;