import { connect } from 'react-redux';
import { fetchUser } from "../../../actions/users_actions";
import { fetchProfilePosts } from "../../../actions/posts_actions";
import { logout } from '../../../actions/session_actions';
import MainProfile from './main_profile';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

    let userPosts = null;
    let currentUser = state.entities.users[state.session.id];
    let profileUser = currentUser;

    if (profileUser) {
        userPosts = Object.values(state.entities.posts)
            .filter(post => post.user_id === currentUser.id)
    }

    return {
        currentUser,
        userPosts,
        profileUser
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProfilePosts: id => dispatch(fetchProfilePosts(id)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: data => dispatch(openModal("photoShow", data)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainProfile);
