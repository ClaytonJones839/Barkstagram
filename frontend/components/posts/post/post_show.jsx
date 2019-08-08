import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import LikesContainer from '../../likes/likes_container'
// import CommentsContainer from './post_comments_container'

class PostShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: ''
        }
        this.handleComment = this.handleComment.bind(this)
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId)
        this.props.fetchPostComments(this.props.postId)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleComment(e) {
        e.preventDefault();
        const comment = { body: this.state.body, post_id: this.props.postId };
        this.props.createComment(comment).then(() => {
            this.props.fetchPostComments(this.props.postId)
        })
        this.setState({ body: '' });
    }

    render() {

        if (!this.props.post) {
            return (
                <h2>
                    fetching post?
                </h2>
            )
        }

        let postComments = this.props.comments.map(comment => {
            return(
                <div
                    key={comment.id - comment.user_id / 3}
                    className="post-show-comment">
                    <Link 
                        className="profile-link"
                        to={`/users/${comment.user_id}`}>
                        {comment.author}
                    </Link>
                    <span className="comment-boyd">
                        &nbsp;{comment.body}
                    </span>
                    {comment.user_id === this.props.currentUser.id ? (
                        <button 
                            className="delete-comment-button"
                            onClick={() => this.props.deleteComment(comment.id).then(() => {
                                this.props.fetchPostComments(this.props.postId)
                            })}>
                            X
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>
            )
        })

        const { photoUrl, author, body, like_count, likers, authorPhotoUrl } = this.props.post;

        return (
        <div>
            <NavBarContainer />
            <div className="post-show-wrapper">
                <section className="post-show-page">
                    <div className="post-show-container">
                        <div className="post-box">
                            <img className="post-show-image"
                                className="post-show-image"
                                src={photoUrl}
                            />
                            <div className="post-show-detail-box">
                                <div className="post-author">
                                    <Link 
                                        className="author-link"
                                        to={`/users/${this.props.post.user_id}`}>
                                            <img className="feed-profile-pic"
                                                src={authorPhotoUrl}
                                            />
                                            {author}
                                    </Link>
                                </div>
                                <div className="post-comments">
                                    <span>
                                        {body ? (
                                            <div className="post-bio">
                                                <Link
                                                    className="profile-link"
                                                    to={`/users/${this.props.post.user_id}`}>
                                                    {author}
                                                </Link>
                                                &nbsp;{body}
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                    </span>
                                    <span>
                                        {postComments}
                                    </span>
                                </div>
                                <div className="post-show-likes">
                                    <div className="likes-div">
                                        <div className="show-buttons">
                                            <LikesContainer 
                                                post={this.props.post}
                                                likers={likers}
                                            />
                                            <i 
                                                className='fas fa-paw show-icon'
                                                onClick={this.handleComment}>
                                            </i>
                                        </div>
                                        <div className="show-likecount">
                                            {likers.length === 1 ? (
                                                `${likers.length} like`
                                            ) : (
                                                `${likers.length} likes`
                                            )}
                                        </div>
                                    </div>
                                    <div className="show-comment-container">
                                        <form className="show-comment-form">
                                            <textarea 
                                                className="show-textarea" 
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
                        </div>
                    </div>
                </section>
            </div>
        </div>
        );
    }
}

export default PostShow;