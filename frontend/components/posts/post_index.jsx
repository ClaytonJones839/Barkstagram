import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'
import LikeContainer from './post_likes_container'

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
                        <Link 
                            to={`/users/${post.user_id}`}>
                        <img className="feed-profile-pic"
                            src={post.authorPhotoUrl}
                        />
                        </Link>
                        <Link 
                            className="profile-link" 
                            to={`/users/${post.user_id}`}>
                                {post.author}
                        </Link>
                        </div>
                    <Link to={`/posts/${post.id}`}>
                        <img 
                            className="feed-image"
                            src={post.photoUrl}
                        />
                    </Link>
                    <div className="feed-image-bottom">
                        <div className="feed-image-bottom-buttons">
                            <LikeContainer 
                                post={post}
                                likers={post.likers}
                            />
                        </div>
                        <div className="feed-image-bottom-likes">
                            {post.like_count === 1 ? (
                            `1 like`
                            ) : (
                            `${post.like_count} likes`
                            )}
                        </div>
                        <div className="feed-image-bottom-bio">
                            {post.body ? (
                                <div>
                                    <Link
                                        className="profile-link"
                                        to={`/users/${post.user_id}`}>
                                        {post.author}
                                    </Link>
                                        &nbsp;{post.body}
                                    </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="feed-image-bottom-comments">
                            comments coming soon..
                        </div>
                        <div className="feed-image-comment-input">
                            <textarea className="feed-textarea" placeholder="Add a comment...">
                                
                            </textarea>
                        </div>
                    </div>
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
