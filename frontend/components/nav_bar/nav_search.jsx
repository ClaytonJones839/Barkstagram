import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class NavSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchField: "",
            // matchedUsers: ""
            matchedUsers: []
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                searchField: "",
                matchedUsers: []
            });
        }
    }

    update(field) {
        return e => {
            let matches = this.props.users
                .filter(user => user.username.toLowerCase()
                    .includes(e.target.value.toLowerCase()));
            if (!e.target.value) matches = [];
            this.setState({
                [field]: e.target.value,
                matchedUsers: matches
            });
        };
    }


    render() {
        
        let userMatches = this.state.matchedUsers.map(user => {
            return(
                <li className="search-result-li"
                    key={user.id}>
                    <Link 
                        className="search-result-user"
                        to={`/users/${user.id}`}>
                        <img 
                            className="search-result-image"
                            src={user.photoUrl} />
                        <div className="search-result-username">
                            {user.username}
                        </div>
                    </Link>
                </li>
            )
        })
    
        return(
        <div className="search-with-results-wrap">
            <input
                className="user-search"
                type="text"
                placeholder="Search Users"
                onChange={this.update('searchField')}
                value={this.state.searchField} 
            />
            <div className="outer-results-wrap">
                {(this.state.matchedUsers.length > 0) ? (
                    <div className="search-results-container">
                        <div id="arrow"></div>
                        <ul className="search-results-list">
                            {userMatches}
                        </ul>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )}
}

export default withRouter(NavSearch)