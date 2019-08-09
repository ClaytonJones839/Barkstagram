import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import { withRouter } from 'react-router-dom'
import FeedIndexItemContainer from './feed_item_container';


class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.action();
        this.props.closeModal()
    }

    render() {

        let allPosts = this.props.posts.map(post => {
            return(
                <FeedIndexItemContainer key={post.id} post={post} />
            )
        })
        return (
            <div>
                <NavBarContainer />
                <section className="feed-container">
                    <div className="feed-left"></div>
                    <div className="feed-mid">
                        <ul className="feed-images">
                            {allPosts}
                        </ul>
                    </div>
                    <div className="feed-right"></div>
                </section>
            </div>
        );
    }
}

export default withRouter(PostIndex);
