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
                <li 
                    className="search-result-user"
                    key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        <img 
                            className="search-result-image"
                            src={user.photoUrl} />
                        <span className="search-result-username">
                            {user.username}
                        </span>
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
            <div className="search-results-container">
                <ul className="search-results-list">
                    {userMatches}
                </ul>
            </div>
        </div>
    )}
}

export default withRouter(NavSearch)