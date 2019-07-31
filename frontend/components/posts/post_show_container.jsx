import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/posts_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.postId
    // debugger;
    return ({
        post: state.entities.posts[postId],
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