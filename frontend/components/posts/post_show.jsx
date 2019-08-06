import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'
import LikesContainer from './post_likes_container'
// import CommentsContainer from './post_comments_container'

class PostShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // commentBody: ''
            body: ''
        }
        // this.handleLike = this.handleLike.bind(this)
        this.handleComment = this.handleComment.bind(this)
        // this.handleProfilePage = this.handleProfilePage.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.postId)
        this.props.fetchPostComments(this.props.postId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comments === []) {
        this.props.fetchPostComments(this.props.postId)
        }
    } 

    handleComment(e) {
        e.preventDefault();
        const comment = { body: this.state.body, post_id: this.props.postId };
        this.props.createComment(comment);
        this.setState({ body: ''});
        // this.props.fetchPostComments(this.props.postId)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    render() {
        // debugger


        if (!this.props.post) {
            return (
                <h2>
                    fetching post?
                </h2>
            )
        }

        let postComments = this.props.comments.map(comment => {
            // debugger
            return(
                <div
                    key={comment.id - comment.user_id / 3}
                    className="post-show-comment">
                    <Link 
                        className="comment-author"
                        to={`/users/${comment.user_id}`}>
                        {comment.author}
                    </Link>
                    <span className="comment-boyd">
                        {comment.body}
                    </span>
                    {comment.user_id === this.props.currentUser.id ? (
                        <button 
                            onClick= {() => this.props.deleteComment(comment.id)}>
                    -X-
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>
            )
        })

        const { photoUrl, author, body, like_count, likers, id } = this.props.post;

        // const likedStatus = 
        //     this.props.post.likers.includes(this.props.currentUser.id);
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
                                        {author}
                                    </Link>
                                </div>
                                <div className="post-comments">
                                    <span>
                                        {postComments}
                                    </span>
                                    <span>
                                        {body}
                                    </span>
                                </div>
                                <div className="post-show-likes">
                                    <div className="likes-div">
                                        <LikesContainer 
                                            post={this.props.post}
                                            likers={likers}
                                        />
                                        {this.props.post.like_count === 1 ? (
                                            `${this.props.post.like_count} like`
                                        ) : (
                                            `${this.props.post.like_count} likes`
                                        )}
                                    </div>
                                    <span>
                                        Comment button coming soon
                                    </span>
                                    <span>
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
                                    </span>
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