import React from 'react';
import { Route, Link } from 'react-router-dom';
import LikeContainer from './post_likes_container'

class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: ''
        }

        this.handleComment = this.handleComment.bind(this)
    }


    // componentDidMount() {
    //     this.props.fetchPost(this.props.post.id)
    // }


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleComment(e) {
        e.preventDefault();
        const comment = { body: this.state.body, post_id: this.props.post.id };
        this.props.createComment(comment).then(() => {
            this.props.fetchPost(this.props.post.id)
        })
        this.setState({ body: '' });
    }


    render() {
        // debugger

        let { post } = this.props;


        let postComments = Object.values(this.props.post.comments).map(comment => {
            return (
                    <div
                        key={comment.id}
                        className="post-show-comment">
                        <Link
                            className="profile-link"
                            to={`/users/${comment.user_id}`}>
                            {comment.author}
                        </Link>
                        <span className="comment-bo">
                            &nbsp;{comment.body}
                        </span>
                    </div>
                )
        })


    return(
        <li className="feed-image-box" key={post.id}>
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
                        <i
                            className='fas fa-paw show-icon'
                            onClick={this.handleComment}>
                        </i>
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
                            <div className="feed-bio">
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
                        {postComments}
                    </div>
                    <div className="feed-image-comment-input">
                        <form className="feed-comment-form">
                            <textarea
                                className="feed-textarea"
                                value={this.state.body}
                                onChange={this.update("body")}
                                placeholder="Add a comment...">
                            </textarea>
                            <button
                                className="submit-comment-button"
                                onClick={this.handleComment}>
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </li>


)}}

export default FeedIndexItem