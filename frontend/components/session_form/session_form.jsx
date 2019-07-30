import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import Typed from 'typed.js';

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
                    <img className="login-left-image" src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"/>
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
                    <div className='session-submit'>
                            <Link 
                                to={`/login`} 
                                onClick={this.demoUser}>
                                Demo Login
                            </Link>
                    </div>
                    </div>
                    
                </form>

            </div>
                <div className="login-signup-link">
                        Don't have an account?
                    <p className="hide">/</p>
                    <Link to="/signup"> Sign up</Link>
                </div>
            </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);
