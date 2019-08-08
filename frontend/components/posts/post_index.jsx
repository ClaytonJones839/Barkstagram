import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'
import { withRouter } from 'react-router-dom'
import FeedIndexItemContainer from './post_index_item_container';
// import FeedComponenet from './feed'

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feedType: this.props.feedType
        }
    }

    componentDidMount() {
        this.props.action();
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
                {/* {(this.state.feedType === "explore") ? (
                    <FeedComponenet 
                        fetchExplorePosts={this.props.fetchExplorePosts}
                        posts={this.props.posts}
                        currentUser={this.props.currentUser}
                        feedType={this.props.feedType}
                    />
                ) : 
                    <FeedComponenet
                        fetchFeedPosts={this.props.fetchFeedPosts}
                        posts={this.props.posts}
                        currentUser={this.props.currentUser}
                        feedType={this.props.feedType}
                    />}  */}
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

export default withRouter(PostIndex);
