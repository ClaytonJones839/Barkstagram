import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props)

    this.handleProfile = this.handleProfile.bind(this);
    this.handleIndex = this.handleIndex.bind(this);
    }


    handleProfile(e) {
        e.preventDefault();
        let path = `/users/${this.props.currentUser.id}`;
        this.props.history.push(path);
    }

    handleIndex(e) {
        e.preventDefault();
        let path = `/posts`;
        debugger
        this.props.history.push(path);
    }

    render() {


    return(
        <section className="nav-bar-container">
            <div className="nav-left">
                <div className="nav-left-index">
                    <Link to={`/posts`}>
                        feed
                    </Link>
                    {/* <button
                        className="profile-button"
                        onClick={this.handleIndex}>
                        index
                    </button> */}
                </div>
                <div className="nav-link-logo">
                    Barkstagram
                </div>
            </div>
            <div className="nav-mid">
                    <input
                        className="user-search"
                        type="text"
                        placeholder="Search Users"
                    />
            </div>
            <div className="nav-right">
                <div className="nav-right-index">
                    <Link to={`/posts`}>
                        feed
                    </Link>
                    {/* <button
                        className="profile-button"
                        onClick={this.handleIndex}>
                        index
                    </button> */}
                </div>
                <div className="nav-link-profile">
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        profile
                    </Link>
                    {/* <button
                        className="profile-button"
                        onClick={this.handleProfile}>
                            profile
                    </button> */}
                </div>
            </div>
        </section>



    )
    }



// nav bar container
    // nav left 
        // link to profile (logo icon)
        // barkstagram logo
    // nav middle 
        // user search 
    // nav right
        // link to index (compass icon)
        // link to currentUser profile (person icon)
//




}

export default NavBar;