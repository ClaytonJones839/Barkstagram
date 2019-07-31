import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchPost(this.post.id)
        this.props.fetchPost(this.props.postId);
    }
    render() {

        if (!this.post) {
            return (
                <h2>
                    fetching post?
                </h2>
            )
        }

        return (
            <div>
                <span>{this.props.post.user_id}</span>
                <h3>
                    Post Show Page
                </h3>
                {/* <img
                    className="post-pic-preview"
                    src={this.state.photoUrl}
                /> */}
            </div>
        );
    }
}

export default PostShow;