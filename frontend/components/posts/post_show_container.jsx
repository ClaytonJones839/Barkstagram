import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/posts_actions';
import { createPost, destroyPost } from '../../actions/posts_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.postId
    const post = state.entities.posts[postId]
    // const postAuthor = state.entities.users[post.user_id]
    // debugger;
    return ({
        post,
        postId
    })
};
            
const mapDispatchToProps = dispatch => {
    return({

        fetchPost: id => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id))
    })
}
            
export default connect(mapStateToProps, mapDispatchToProps)(PostShow)