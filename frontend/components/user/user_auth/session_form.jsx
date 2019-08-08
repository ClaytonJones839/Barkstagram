import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AnimationComponent from './animation_component'
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
            username: 'OzzieTheToller_Demo',
            password: 'test123'
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
                <AnimationComponent />
            </div>
            <div className="login-page-right">

            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="login-logo">
                        Barkstagram
                    </h1>
                    <div className="login-errors-ul">
                        {this.renderErrors()}
                    </div>
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
                            className="session-submit login" 
                            type="submit" 
                            value="Log in"
                        />
                        <br/>
                        &nbsp;Or&nbsp;
                        <br />
                            <button className="session-submit demo"
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
