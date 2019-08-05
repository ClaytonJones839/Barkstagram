import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

class Likes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentlyLiked: this.props.currentUser
        }
        this.handleLike = this.handleLike.bind(this)

    }




    handleLike(e) {
        // debugger
        e.preventDefault();
        if (!this.props.likers.includes(this.props.currentUser.id)) {
            this.props.createLike({ post_id: this.props.post.id })
                // .then(this.props.fetchPost(this.props.post.id))
        } else {
            this.props.deleteLike(this.props.post.id)
                // .then(this.props.fetchPost(this.props.post.id))
        }
    }


    render() {

    return (
        <div>
            <span>
                {this.props.post.like_count} likes
            </span>
            <div className="post-show-buttons">
                <button onClick={this.handleLike}>
                    33
                </button>
            </div>
        </div>
    )}
}

export default Likes;