import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchExplorePosts, deletePost } from '../../actions/posts_actions';

const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts)
    let currentUser = state.entities.users[state.session.id];
    return ({
        currentUser,
        posts
    })
}

const mapDispatchToProps = dispatch => ({
    action: () => dispatch(fetchExplorePosts()),
    deletePost: id => dispatch(deletePost(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);
