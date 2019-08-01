import { connect } from 'react-redux';
import { fetchUser } from "../../actions/users_actions";
import { fetchPosts } from "../../actions/posts_actions";
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    // let userPage = state.entities.users[ownProps.match.params.userId]
    const profileId = ownProps.match.params.userId
    const profileUser = state.entities.users[profileId]

    let currentUser = state.entities.users[state.session.id];
    let userPosts = Object.values(state.entities.posts)
        .filter(post => post.user_id === profileUser.id);

    return {
        currentUser,
        userPosts,
        profileUser
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);
