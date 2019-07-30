import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    renderErrors() {
        return(
        <ul>
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
            <div className="login-page-right">
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="login-logo">
                        Barkstagram
                    </h1>
                    {this.renderErrors()}
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
                            value={this.props.formType}
                        />
                    </div>
                </form>

            </div>
                <div className="login-signup-link">
                    Don't have an account?
                    <Link to="/signup"> Sign up</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);
