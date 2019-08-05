import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/likes_actions';
import Likes from './post_likes';
import { create } from 'domain';
import { fetchPost } from '../../actions/posts_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const currentUser = state.entities.users[state.session.id];
    const post = ownProps.post
    const likers = ownProps.likers
    const likedStatus = ownProps.likedStatus


    // const likers = post.likers
    // const postAuthor = state.entities.users[post.user_id]
    // debugger;
    return ({
        currentUser,
        likers,
        post,
        likedStatus
        // postId
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