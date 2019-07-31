import { connect } from 'react-redux';
import { fetchUser } from "../../actions/users_actions";
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    // let userPage = state.entities.users[ownProps.match.params.userId]
    let currentUser = state.entities.users[state.session.id]
    let userPosts = []
    if (currentUser.posts) {
        userPosts = Object.values(currentUser.posts)
    }
    // debugger
    // let allUsers = state.entities.users
    return {
        currentUser,
        userPosts
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);
