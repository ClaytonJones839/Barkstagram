import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

class Likes extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     like_count: this.props.likers.length
        // }

        if (!this.props.likers.includes(this.props.currentUser.id)) {
            this.state = {
                buttonText: "like"
            }
        } else {
            this.state = {
                buttonText: "unlike"
            }
        }
        
        this.handleLike = this.handleLike.bind(this)

    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.post.id)
    // }

    // componentDidUpdate(prevProps) {
    //     // debugger
    //     if (this.props.post !== prevProps.post) {
    //         this.props.fetchPost(this.props.post.id);
    //     }
    // }

    // handleLike(e) {
        // debugger
    //     e.preventDefault();
    //     if (!this.props.likers.includes(this.props.currentUser.id)) {
    //         this.props.createLike({ post_id: this.props.post.id });
    //         this.setState({
    //             like_count: this.props.likers.length - 1
    //         })
    //         // .then(this.props.fetchPost(this.props.post.id))
    //     } else {
    //         this.props.deleteLike(this.props.post.id)
    //         // .then(this.props.fetchPost(this.props.post.id))
    //     }
    // }

        handleLike(e) {


            // if (this.props.likers.includes(this.props.currentUser.id)) {
            if (this.state.buttonText === "unlike") {
                // debugger
                this.props.deleteLike(this.props.post.id).then(() => {
                        this.setState({
                            buttonText: "like"
                        })
                })
            } else {
                this.props.createLike({ post_id: this.props.post.id })
                    .then(() => {
                        this.setState({
                            buttonText: "unlike"
                        })
                    })
            }
        }



    render() {


    

    return (
        <div>

            {/* <div className="post-show-buttons">
                <button onClick={this.handleLike}>
                    33
                </button> */}
            {/* </div> */}
            <div className="like-button-div">
                <div className="like-button">
                    {(this.state.buttonText === "unlike") ? (
                        <div className="like-button-liked" onClick={this.handleLike}>
                            {/* <span>&#9825;</span> */}
                            <span>&#9829;</span>
                        </div>
                        ) : (
                        <div className="like-button-unliked" onClick={this.handleLike}>
                            <span>&#9825;</span>
                        </div>
                    )}
                </div>
                <div>

                {this.props.post.like_count === 1 ? (
                    `${this.props.post.like_count} like`
                ) : (
                    `${this.props.post.like_count} likes`
                )}             
                </div>
            </div>
        </div>
    )}
}

export default Likes;