import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostFormContainer from '../../posts/post/post_form_container'
import NavBarContainer from '../../nav_bar/nav_bar_container'

class UserShow extends React.Component {
    constructor(props) {
        super(props)

        this.userPosts = this.props.userPosts;
        this.currentUser = this.props.currentUser;
        this.logout = this.props.logout
        this.handleNewPostForm = this.handleNewPostForm.bind(this)
        this.handleEditUser = this.handleEditUser.bind(this)
        this.handleFollow = this.handleFollow.bind(this)
        this.handleUnfollow = this.handleUnfollow.bind(this)
    }

    componentDidMount() {
        this.props.fetchProfilePosts(this.props.match.params.userId);
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleFollow(e) {
        e.preventDefault();

        this.props.createFollow({ followed_user_id: this.props.profileUser.id })
            .then(() => this.props.fetchUser(this.props.profileUser.id) )
        } 

    handleUnfollow(e) {
        e.preventDefault();

        this.props.deleteFollow(this.props.profileUser.id).then(() => {
            this.props.fetchUser(this.props.profileUser.id)
        })
    } 

    handleNewPostForm(e) {
        e.preventDefault();
        let path = `/new-post`;
        this.props.history.push(path);
    }

    handleEditUser(e) {
        e.preventDefault();
        let path = `/edit-profile`;
        this.props.history.push(path);
    }

    render() {
        if (!this.props.profileUser) {
            return (
                <h2>
                    fetching page?
                </h2>
            )
        }
        const { 
            username, 
            photoUrl, 
            id, 
            followerIds, 
            followingIds 
        } = this.props.profileUser

        let userPhotos = this.props.userPosts.map(post => {
            return(
                <li key={post.id}>
                    <div className="image-container">
                        <Link to={`/posts/${post.id}`}>
                            <img 
                                className="user-page-photos"
                                src={post.photoUrl} 
                            />
                            <div className="image-overlay">
                                <p className="image-overlay-text">
                                    <span className="overlay-heart">&#9829;</span>
                                    {post.likers.length}
                                    <i className='fas fa-comment'></i>
                                    {post.commentIds.length}
                                </p>
                            </div>
                        </Link>
                    </div>
                </li>
            )
        })
        return (
            <div>
                <NavBarContainer />
                <div className="profile-wrap">
            <div className="profile-left"></div>
            <div className="profile-container">

                <div className="profile-top">
                    <div className="profile-display-pic">
                        <img 
                            className="profile-display-pic"
                            src={photoUrl}
                        />
                    </div>
                    <div className="profile-top-right">
                    <div className="profile-top-up" >
                        <h1>{username}</h1>
                            {(id === this.props.currentUser.id) ? (
                                <div className="profile-top-buttons">
                                    <button 
                                        className="profile-button" 
                                        onClick={this.logout}>
                                        Log Out
                                    </button>
                                    <button
                                        className="profile-button"
                                        onClick={this.handleEditUser}>
                                        Edit Profile
                                    </button>
                                    <button 
                                        className="profile-button" 
                                        onClick={this.handleNewPostForm}>
                                        Add Photo
                                    </button>
                                </div>
                            ) : (
                                <div className="profile-top-buttons">
                                {(this.props.profileUser.followerIds.includes(this.props.currentUser.id)) ? (
                                        <button 
                                            className="profile-button"
                                            onClick={this.handleUnfollow}>
                                            Unfollow
                                        </button>
                                ) : (
                                        <button 
                                            className="profile-button"
                                            onClick={this.handleFollow}>
                                            Follow
                                        </button>
                                )}
                                </div>
                            )}
                    </div>
                    <div className="profile-top-down">
                        <span>{this.props.userPosts.length} Posts</span>
                        <span className="cursor">{followerIds.length} Followers</span>
                        <span className="cursor">{followingIds.length} Following</span>
                    </div>
                    </div>
                </div>
                    <div className="profile-photo-index-container">
                        <ul className="profile-photo-index">
                            {userPhotos}
                        </ul>
                    </div>
            </div>
            <div className="profile-right"></div>
                </div>
            </div>
        );
    }
}

export default UserShow;