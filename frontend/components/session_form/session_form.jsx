import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    demoUser(e) {
        e.preventDefault();
        this.props.processForm({
            username: 'Demo_User',
            password: 'Demo_User'
        })
    }

    renderErrors() {
        return(
        <ul className="login-errors">
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
            ))}
        </ul>
        );
    }

    render() {
        return (
            <div className="login-page-container">
            <div className="login-page-left">
                <div className="login-left-image-container">
                    <img className="login-left-image" src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"/>
                    <img className="login-left-image-inner" src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
                    <img className="login-left-image-inner-2" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/66584318_10216687664477948_8152920814933508096_n.jpg?_nc_cat=102&_nc_oc=AQnEPH6-7NxFpkyMnw_BXmTU2rzKrFZBSczf4Z-Hoi6Nvnke87caQJHW3OFvd9LIcAI&_nc_ht=scontent-mia3-2.xx&oh=9be3dd7aeb2785cfde4691c9b4f0d4b2&oe=5DAA76BD" />
                </div>
            </div>
            <div className="login-page-right">
                    {this.renderErrors()}
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="login-logo">
                        Barkstagram
                    </h1>

                    <div className="login-form">
                    <br/>
                        <label>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder="Username"
                        />
                        </label>
                        <br/>
                        <label>
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password"
                        />
                        </label>
                        <br/>
                        <input
                            className="session-submit" 
                            type="submit" 
                            value="Log in"
                        />
                        <br/>
                            <button className="session-submit"
                                onClick={this.demoUser}>
                                Demo Login
                            </button>
                        </div>
                </form>

            </div>
                <div className="login-signup-link">
                    <div className="center">
                        Don't have an account?
                        &nbsp;
                        <Link to="/signup"> Sign up</Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);
