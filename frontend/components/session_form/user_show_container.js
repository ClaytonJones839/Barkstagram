import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = ( state ) => {
    let currentUser = state.entities.users[state.session.id]
    return {
        currentUser,
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);
