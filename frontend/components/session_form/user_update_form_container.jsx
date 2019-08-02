import { connect } from "react-redux";
import UserUpdateForm from "./user_update_form";
import { updateUser } from "../../actions/users_actions";

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    let userId = currentUser.id
    return {
        currentUser,
        userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: user => dispatch(updateUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm);