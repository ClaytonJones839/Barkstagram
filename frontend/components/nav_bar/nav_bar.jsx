import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        // this.handleFeed = this.handleFeed.bind(this);
        // this.handleExplore = this.handleExplore.bind(this);
    }

    // handleFeed(e) {
    //     e.preventDefault();
    //     this.props.fetchFeedPosts().then(() => {
    //         this.props.history.push(`/feed`)
    //     })
    // }

    // handleExplore(e) {
    //     e.preventDefault();
    //     this.props.fetchExplorePosts().then(() => {
    //         this.props.history.push(`/explore`)
    //     })
    // }

    render() {

    return(
        <section className="nav-bar-container">
            <div className="nav-left">
                <div className="nav-left-index">
                    <Link 
                        className="nav-icon"
                        // onClick={this.handleFeed}
                        // to="/posts">
                        to={`/feed`}>
                        <i className='fas fa-camera'></i>
                    </Link>
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
                    <Link 
                        className="nav-icon"
                        // onClick={this.handleExplore}
                        // to="/explore">
                        to={`/explore`}>
                        <i className='far fa-compass'></i>
                    </Link>
                </div>
                <div className="nav-right-profile">
                    <Link 
                        className="nav-icon"
                        to={`/users/${this.props.currentUser.id}`}>
                        <i className='fas fa-dog'></i>
                    </Link>
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

export default withRouter(NavBar);