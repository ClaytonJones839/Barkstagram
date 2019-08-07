import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

import FeedIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchFeedPosts();
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
                <div className="feed-left">
                </div>
                <div className="feed-mid">
                    <ul className="feed-images">
                        {allPosts}
                    </ul>
                </div>
                <div className="feed-right">
                </div>
            </section>
            </div>
        );
    }
}

export default PostIndex;
