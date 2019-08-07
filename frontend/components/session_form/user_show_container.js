import { connect } from 'react-redux';
import { fetchUser } from "../../actions/users_actions";
import { fetchPosts } from "../../actions/posts_actions";
import { logout } from '../../actions/session_actions';
import { createFollow, deleteFollow } from '../../actions/followings_actions'
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    const profileId = ownProps.match.params.userId
    const profileUser = state.entities.users[profileId]
    let userPosts = null
    if (profileUser) {
        userPosts = Object.values(state.entities.posts)
            .filter(post => post.user_id === profileUser.id)
    }
    let currentUser = state.entities.users[state.session.id];
    return {
        currentUser,
        userPosts,
        profileUser
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);
