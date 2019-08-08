import { fetchUsers } from '../../actions/users_actions'
import { connect } from 'react-redux';
import NavSearch from './nav_search'

const mapStateToProps = state => {
    let users = Object.values(state.entities.users)
    return({
        users
    })
}
            
const mapDispatchToProps = dispatch => {
    return({
        fetchUsers: () => dispatch(fetchUsers())
    })
}
            
export default connect(mapStateToProps, mapDispatchToProps)(NavSearch)