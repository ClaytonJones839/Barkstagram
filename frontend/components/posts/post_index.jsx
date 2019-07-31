import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import PostIndexItem from './post_index_item';
// import PostFormContainer from './post_form_container';

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let allPosts = this.props.posts.map(post => {
            return(
                <li key={post.id }>
                    <img 
                        className="post-index"
                        src={post.photoUrl}
                    />
                    <div className="post-body">
                        {post.body}
                    </div>
                </li>
            )
        })


        return (
            <section className="post-index-container">
                <ul className="post-ul">
                    {allPosts}
                </ul>
            </section>
        );
    }
}

export default PostIndex;
