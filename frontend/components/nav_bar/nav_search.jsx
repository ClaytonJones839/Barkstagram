import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class NavSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        

    return(
        <input
            className="user-search"
            type="text"
            placeholder="Search Users"
        />
    )}
}

export default withRouter(NavSearch)