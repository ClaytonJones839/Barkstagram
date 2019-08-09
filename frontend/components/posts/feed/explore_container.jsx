import { connect } from 'react-redux';
import PostIndex from './feed';
import { fetchExplorePosts, deletePost } from '../../../actions/posts_actions';
import { closeModal, openModal } from '../../../actions/modal_actions';

const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts).reverse();
    let currentUser = state.entities.users[state.session.id];
    return ({
        currentUser,
        posts
    })
}

const mapDispatchToProps = dispatch => ({
    action: () => dispatch(fetchExplorePosts()),
    deletePost: id => dispatch(deletePost(id)),
    openModal: data => dispatch(openModal("photoShow", data)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);
