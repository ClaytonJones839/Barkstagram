import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

class PostShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleLike = this.handleLike.bind(this)
        // this.handleProfilePage = this.handleProfilePage.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.postId)
    }

    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.post && prevProps.post.like_count !== this.props.post.like_count) {
            this.props.fetchPost(this.props.postId)
        }
    }

    // handleProfilePage(e) {
    //     e.preventDefault();
    //     let path = `/users/${this.props.post.user_id}`;
    //     this.props.history.push(path);
    // }

    handleLike(e) {
        e.preventDefault();

        this.props.createLike({post_id: this.props.postId})
            .then(this.props.fetchPost(this.props.postId))
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

        const { photoUrl, author, body, like_count, id } = this.props.post;
        return (
        <div>
            <NavBarContainer />
        <div className="post-show-wrapper">
            {/* <div className="link-wrap">
            <Link
                className="author-link"
                to={`/users/${this.props.post.user_id}`}>
                Back to Profile
            </Link>
            </div> */}
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
                        {/* <div className="post-body">

                        </div> */}
                        <div className="post-comments">
                            <span>
                                Comments coming soon
                            </span>
                            <span>
                                {body}
                            </span>
                        </div>
                        <div className="post-show-likes">
                            <span>
                                {like_count} likes
                            </span>
                        </div>
                        <div className="post-show-buttons">
                            <button onClick={this.handleLike}>
                                33
                            </button>
                            <span>
                                Comment button coming soon
                            </span>
                            <span>
                                Comment input form
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