import { connect } from 'react-redux';

import PostIndex from './feed';
import { fetchFeedPosts, deletePost } from '../../../actions/posts_actions';


const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts).reverse()
    let currentUser = state.entities.users[state.session.id];
    return({
        currentUser,
        posts
    })
}

const mapDispatchToProps = dispatch => ({
    action: () => dispatch(fetchFeedPosts()),
    deletePost: id => dispatch(deletePost(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);
