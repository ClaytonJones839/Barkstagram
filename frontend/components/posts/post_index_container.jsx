import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/posts_actions';


const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts)
    let currentUser = state.entities.users[state.session.id];
    return({
        currentUser,
        posts
    })
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);
