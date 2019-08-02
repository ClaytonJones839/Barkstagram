import { connect } from 'react-redux';
import { fetchUser } from "../../actions/users_actions";
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state,ownProps ) => {
    let currentUser = state.entities.users[state.session.id];
    return({
        currentUser
    })
}
            
const mapDispatchToProps = dispatch => {
    return({
        fetchUser: id => dispatch(fetchUser(id))
    })
}
            
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)