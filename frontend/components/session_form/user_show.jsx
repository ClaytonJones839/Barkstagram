import React from 'react';
import { Link } from 'react-router-dom';
import PostFormContainer from '../posts/post_form_container'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
            // this.userPosts = this.props.userPosts;
            this.currentUser = this.props.currentUser;
            this.logout = this.props.logout
    }

    render() {


        // let userPhotos = this.userPosts.map(post => {
        //     return(
        //         <li>
        //             <img 
        //                 className="user-page-photos"
        //                 src={post.photo} 
        //             />
        //         </li>
        //     )
        // })
        return (
            <div>
                <span>{this.currentUser.username}</span>
                <button className="header-button" onClick={this.logout}>Log Out</button>
                <h3>
                    User's Profile Page
                </h3>
                <br />
                <h2>
                    User's Photos
                    <ul>
                        {/* {userPhotos} */}
                    </ul>
                </h2>
                <PostFormContainer currentUser={this.currentUser} />
            </div>
        );
    }
}

export default UserShow;