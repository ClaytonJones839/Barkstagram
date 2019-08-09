import { connect } from 'react-redux';

import Feed from './feed';
import { fetchFeedPosts, deletePost } from '../../../actions/posts_actions';
import { closeModal, openModal } from '../../../actions/modal_actions';


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
    deletePost: id => dispatch(deletePost(id)),
    openModal: data => dispatch(openModal("photoShow", data)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
