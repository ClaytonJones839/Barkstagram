import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../../actions/posts_actions';
import { fetchPostComments, createComment, deleteComment } from '../../../actions/comments_actions';
import PostShow from './post_show';
import { closeModal, openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const post = state.entities.posts[ownProps.data.postId]
    // const comments = Object.values(state.entities.comments)

    return ({
        currentUser,
        // comments,
        post
    })
};
            
const mapDispatchToProps = dispatch => {
    return({
        fetchPost: id => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id)),
        fetchPostComments: postId => dispatch(fetchPostComments(postId)),
        deleteComment: id => dispatch(deleteComment(id)),
        createComment: comment => dispatch(createComment(comment)),
        openModal: data => dispatch(openModal("photoShow", data)),
        closeModal: () => dispatch(closeModal())
    })
}
            
export default connect(mapStateToProps, mapDispatchToProps)(PostShow)