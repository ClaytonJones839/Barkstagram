import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../../actions/posts_actions';
import { fetchPostComments, createComment, deleteComment } from '../../../actions/comments_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const postId = ownProps.match.params.postId
    const post = state.entities.posts[postId]
    const comments = Object.values(state.entities.comments)

    return ({
        currentUser,
        comments,
        post,
        postId
    })
};
            
const mapDispatchToProps = dispatch => {
    return({
        fetchPost: id => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id)),
        fetchPostComments: postId => dispatch(fetchPostComments(postId)),
        deleteComment: id => dispatch(deleteComment(id)),
        createComment: comment => dispatch(createComment(comment))
    })
}
            
export default connect(mapStateToProps, mapDispatchToProps)(PostShow)