import React from 'react';
import { Link } from 'react-router-dom';
import PostFormContainer from '../posts/post_form_container'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
            this.userPosts = this.props.userPosts;
            this.currentUser = this.props.currentUser;
            this.logout = this.props.logout
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
                    <h2>{this.currentUser.username}</h2>
                    <button className="header-button" onClick={this.logout}>Log Out</button>
                </div>

                <br />
                <h2>
                    <div className="profile-photo-index-container">
                        <ul className="profile-photo-index">
                            {userPhotos}
                        </ul>
                    </div>
                </h2>
            </div>
        );
    }
}

export default UserShow;