
import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout
    }

    render() {

        return (
            <div>
                <span>{this.currentUser.username}</span>
                <button className="header-button" onClick={this.logout}>Log Out</button>
                <h3>
                    User's Profile Page
                </h3>
                <br />
                <h2>
                    User's Photos
                    <ul>
                        <li>
                            user photo 1
                        </li>
                        <li>
                            user photo 2
                        </li>
                    </ul>
                </h2>
            </div>
        );
    }
}

export default UserShow;