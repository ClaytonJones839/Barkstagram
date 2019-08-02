import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

// import PostIndexItem from './post_index_item';
// import PostFormContainer from './post_form_container';

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let allPosts = this.props.posts.map(post => {
            return(
                <li className="feed-image-box" key={post.id }>
                    <div className="feed-image-header">
                        <div className="feed-image-header-wrap">
                        <img className="feed-profile-pic"
                            src={post.authorPhotoUrl}
                        />
                        <Link 
                            className="profile-link" 
                            to={`/users/${post.user_id}`}>
                                {post.author}
                        </Link>
                        </div>
                    <img 
                        className="feed-image"
                        src={post.photoUrl}
                    />
                    </div>
                </li>
            )
        })


        return (
            <div>
                <NavBarContainer />
            <section className="feed-container">
                <div className="feed-left">
                </div>
                <div className="feed-mid">
                    <ul className="feed-images">
                        {allPosts}
                    </ul>
                </div>
                <div className="feed-right">
                </div>
            </section>
            </div>
        );
    }
}

export default PostIndex;
