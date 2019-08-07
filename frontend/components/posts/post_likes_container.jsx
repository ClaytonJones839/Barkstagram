import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/likes_actions';
import Likes from './post_likes';
import { fetchPost } from '../../actions/posts_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const post = ownProps.post
    const likers = ownProps.likers
    const likedStatus = ownProps.likedStatus
    return ({
        currentUser,
        likers,
        post,
        likedStatus
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        createLike: like => dispatch(createLike(like)),
        deleteLike: id => dispatch(deleteLike(id)),
        fetchPost: id => dispatch(fetchPost(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)