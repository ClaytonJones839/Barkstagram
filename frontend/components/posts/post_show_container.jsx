import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.match.params.postId]
});
            
const mapDispatchToProps = dispatch => {
    return({
        fetchPost: id => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id))
    })
}
            
export default connect(mapStateToProps, mapDispatchToProps)(PostShow)