import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/posts_actions';
import { createLike, deleteLike } from '../../actions/likes_actions';
import PostShow from './post_show';
import { create } from 'domain';

const mapStateToProps = (state, ownProps) => {
    // const currentUser = state.entities.users[state.session.id];
    const postId = ownProps.match.params.postId
    const post = state.entities.posts[postId]
    const likes = state.entities.post.
    // const postAuthor = state.entities.users[post.user_id]
    // debugger;
    return ({
        // currentUser,
        post,
        postId
    })
};
            
const mapDispatchToProps = dispatch => {
    return({
        fetchPost: id => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: id => dispatch(deleteLike(id))
    })
}
            
export default connect(mapStateToProps, mapDispatchToProps)(PostShow)