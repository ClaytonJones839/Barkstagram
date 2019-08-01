import { connect } from "react-redux";
import UserUpdateForm from "./user_edit";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    return {
        currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: user => dispatch(updateUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm);