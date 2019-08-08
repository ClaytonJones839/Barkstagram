import React from 'react';
import { Link } from 'react-router-dom';

class Likes extends React.Component {
    constructor(props) {
        super(props)

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
        handleLike(e) {
            if (this.state.buttonText === "unlike") {
                // debugger
                this.props.deleteLike(this.props.post.id).then(() => {
                        this.setState({
                            buttonText: "like"
                        })
                })
            } else {
                this.props.createLike({ post_id: this.props.post.id })
                    .then(() => {this.setState({buttonText: "unlike"})
                    })
            }
        }

    render() {
    return (
        <div>
            <div className="like-button-div">
                <div className="like-button">
                    {(this.state.buttonText === "unlike") ? (
                        <div className="like-button-liked" onClick={this.handleLike}>
                            <span>&#9829;</span>
                        </div>
                        ) : (
                        <div className="like-button-unliked" onClick={this.handleLike}>
                            <span>&#9825;</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )}
}

export default Likes;