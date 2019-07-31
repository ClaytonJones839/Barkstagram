import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.postId);
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

        const { photoUrl, author, body } = this.props.post;
        return (


        <section className="post-show-page">
            <div className="post-show-container">
                <div className="post-box">
                    <img className="post-show-image"
                        className="post-show-image"
                        src={photoUrl}
                    />
                    <div className="post-show-detail-box">
                        <div className="post-author">
                            <span>
                                {author}
                            </span>
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
                                Liked by ###
                            </span>
                        </div>
                        <div className="post-show-buttons">
                            <span>
                                Like button coming soon
                            </span>
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
        );
    }
}

export default PostShow;